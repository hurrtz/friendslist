import {
  addFriend,
  deleteFriend,
  starFriend,
  nextPage,
  previousPage,
  setSex,
} from '../actions';
import {
  ADD_FRIEND,
  DELETE_FRIEND,
  STAR_FRIEND,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  SET_SEX,
} from '../constants';

describe('FriendListApp', () => {
  describe('actions', () => {
    it('should create an action to add a friend', () => {
      const name = 'Thomas Jefferson';
      const expectedAction = {
        type: ADD_FRIEND,
        name,
      };

      expect(addFriend(name)).toEqual(expectedAction);
    });

    it('should create an action to delete a friend', () => {
      const id = 0;
      const expectedAction = {
        type: DELETE_FRIEND,
        id,
      };

      expect(deleteFriend(id)).toEqual(expectedAction);
    });

    it('should create an action to star a friend', () => {
      const id = 0;
      const expectedAction = {
        type: STAR_FRIEND,
        id,
      };

      expect(starFriend(id)).toEqual(expectedAction);
    });

    it('should create an action to go to the next page', () => {
      const expectedAction = {
        type: NEXT_PAGE,
      };

      expect(nextPage()).toEqual(expectedAction);
    });

    it('should create an action to go to the previous page', () => {
      const expectedAction = {
        type: PREVIOUS_PAGE,
      };

      expect(previousPage()).toEqual(expectedAction);
    });

    it('should create an action to set the sex of a friend', () => {
      const id = 0;
      const sex = 'male';
      const expectedAction = {
        type: SET_SEX,
        payload: { id, sex },
      };

      expect(setSex({ id, sex })).toEqual(expectedAction);
    });
  });
});
