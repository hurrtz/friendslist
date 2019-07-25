import { ADD_FRIEND, DELETE_FRIEND, STAR_FRIEND } from './constants';

export function addFriend(name) {
  return {
    type: ADD_FRIEND,
    name,
  };
}

export function deleteFriend(id) {
  return {
    type: DELETE_FRIEND,
    id,
  };
}

export function starFriend(id) {
  return {
    type: STAR_FRIEND,
    id,
  };
}
