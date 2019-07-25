import {
  ADD_FRIEND,
  DELETE_FRIEND,
  STAR_FRIEND,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  SET_SEX,
} from './constants';

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

export function nextPage() {
  return { type: NEXT_PAGE };
}

export function previousPage() {
  return { type: PREVIOUS_PAGE };
}

export function setSex({ id, sex }) {
  return { type: SET_SEX, payload: { id, sex } };
}
