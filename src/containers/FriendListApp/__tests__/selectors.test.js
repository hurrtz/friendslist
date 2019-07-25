import { getFriends, hasNextFriends, hasPreviousFriends } from '../selectors';
import { initialState } from '../reducer';

describe('FriendListApp', () => {
  describe('selectors', () => {
    describe('getFriends', () => {
      it('should return the same list of friends', () => {
        const selected = getFriends({
          friendlist: {
            ...initialState,
            friendsById: initialState.friendsById.filter(
              (friend, index) => index === 0,
            ),
          },
        });

        expect(selected).toEqual(
          initialState.friendsById.filter((friend, index) => index === 0),
        );
      });

      it('should return a reduced list of friends', () => {
        const selected = getFriends({
          friendlist: { ...initialState },
        });

        expect(selected).toEqual(
          initialState.friendsById.filter((friend, index) => index < 2),
        );
      });
    });

    describe('hasNextFriends', () => {
      it('should return true when there are more friends than currently displayed', () => {
        const selected = hasNextFriends({
          friendlist: { ...initialState },
        });

        expect(selected).toEqual(true);
      });

      it('should return false when there are no more friends than currently displayed', () => {
        const selected = hasNextFriends({
          friendlist: {
            ...initialState,
            friendsById: initialState.friendsById.filter(
              (friend, index) => index === 0,
            ),
          },
        });

        expect(selected).toEqual(false);
      });
    });

    describe('hasPrevFriends', () => {
      it('should return true when there are more friends we can go back to', () => {
        const selected = hasPreviousFriends({
          friendlist: {
            ...initialState,
            friendsById: initialState.friendsById.filter(
              (friend, index) => index === 0,
            ),
          },
        });

        expect(selected).toEqual(false);
      });

      it('should return false when there are no more friends we can go back to', () => {
        const selected = hasPreviousFriends({
          friendlist: {
            ...initialState,
            friendsById: [
              ...initialState.friendsById,
              ...initialState.friendsById,
              ...initialState.friendsById,
            ],
            page: 2,
          },
        });

        expect(selected).toEqual(true);
      });
    });
  });
});
