import { ADD_FRIEND, DELETE_FRIEND, STAR_FRIEND } from './constants';

const initialState = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true,
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
    },
    {
      name: 'George Washington',
      starred: false,
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

    default:
      return state;
  }
}
