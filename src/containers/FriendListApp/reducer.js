import { v4 as uuid } from 'uuid';
import {
  ADD_FRIEND,
  DELETE_FRIEND,
  STAR_FRIEND,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  SET_SEX,
} from './constants';

const initialState = {
  friendsPerPage: 2,
  page: 1,
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true,
      sex: 'male',
      id: uuid(),
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
      sex: 'male',
      id: uuid(),
    },
    {
      name: 'George Washington',
      starred: false,
      sex: 'male',
      id: uuid(),
    },
  ],
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            name: action.name,
            id: uuid(),
          },
        ],
      };

    case DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter(
          (item, index) => index !== action.id,
        ),
      };

    case STAR_FRIEND: {
      const friends = [...state.friendsById];
      const friend = friends.find((item, index) => index === action.id);
      friend.starred = !friend.starred;

      return {
        ...state,
        friendsById: friends,
      };
    }

    case NEXT_PAGE:
      return { ...state, page: (state.page += 1) };

    case PREVIOUS_PAGE:
      return { ...state, page: Math.max((state.page -= 1), 1) };

    case SET_SEX:
      return {
        ...state,
        friendsById: state.friendsById.map((friend, index) =>
          index === action.payload.id
            ? { ...friend, sex: action.payload.sex }
            : friend,
        ),
      };

    default:
      return state;
  }
}
