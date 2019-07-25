import reducer, { initialState } from '../reducer';
import {
  ADD_FRIEND,
  DELETE_FRIEND,
  STAR_FRIEND,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  SET_SEX,
} from '../constants';

describe('FriendListApp', () => {
  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual({ ...initialState });
    });

    it('should handle ADD_FRIEND', () => {
      expect(
        reducer(undefined, {
          type: ADD_FRIEND,
          name: 'Theodore Roosevelt',
        }),
      ).toEqual({
        ...initialState,
        friendsById: [
          ...initialState.friendsById,
          {
            name: 'Theodore Roosevelt',
          },
        ],
      });
    });

    it('should handle DELETE_FRIEND', () => {
      const id = 1;

      expect(
        reducer(undefined, {
          type: DELETE_FRIEND,
          id,
        }),
      ).toEqual({
        ...initialState,
        friendsById: initialState.friendsById.filter(
          (friend, index) => index !== id,
        ),
      });
    });

    it('should handle STAR_FRIEND', () => {
      const id = 1;

      expect(
        reducer(undefined, {
          type: STAR_FRIEND,
          id,
        }),
      ).toEqual({ ...initialState });
    });

    it('should handle NEXT_PAGE', () => {
      expect(
        reducer(undefined, {
          type: NEXT_PAGE,
        }),
      ).toEqual({
        ...initialState,
        page: (initialState.page += 1),
      });
    });

    it('should handle NEXT_PAGE', () => {
      expect(
        reducer(undefined, {
          type: PREVIOUS_PAGE,
        }),
      ).toEqual({
        ...initialState,
        page: (initialState.page -= 1),
      });
    });

    it('should handle SET_SEX', () => {
      const id = 1;
      const sex = 'female';

      expect(
        reducer(undefined, {
          type: SET_SEX,
          payload: { id, sex },
        }),
      ).toEqual({
        ...initialState,
        friendsById: [
          ...initialState.friendsById.map((friend, index) =>
            index === id ? { ...friend, sex } : friend,
          ),
        ],
      });
    });
  });
});
