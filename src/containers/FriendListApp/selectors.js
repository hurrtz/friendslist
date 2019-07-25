import { createSelector } from 'reselect';

/**
 * get the substate of the the Friendlist
 *
 * @returns friendlist state
 */
const getFriendlistState = state => state.friendlist;

/**
 * get the amount of friends that can be visible on one page
 *
 * @returns {number}
 */
const getFriendsPerPage = createSelector(
  getFriendlistState,
  friendlistState => friendlistState.friendsPerPage,
);

/**
 * get the current page that the user has navigated to
 *
 * @returns {number}
 */
const getCurrentPage = createSelector(
  getFriendlistState,
  friendlistState => friendlistState.page,
);

/**
 * get all friends currently existing in the app state
 *
 * @returns {array} list of friends
 */
const getAllFriends = createSelector(
  getFriendlistState,
  friendlistState => friendlistState.friendsById,
);

/**
 * get all friends that can/should be displayed on the current page
 *
 * @returns {array} list of friends
 */
export const getFriends = createSelector(
  [getAllFriends, getFriendsPerPage, getCurrentPage],
  (allFriends, friendsPerPage, currentPage) => {
    if (allFriends.length > friendsPerPage) {
      return allFriends.filter(
        (friend, index) =>
          index + friendsPerPage >= currentPage * friendsPerPage &&
          index + friendsPerPage <
            currentPage * friendsPerPage + friendsPerPage,
      );
    }

    return allFriends;
  },
);

/**
 * get the information if there are friends after the current page
 *
 * @returns {boolean}
 */
export const hasNextFriends = createSelector(
  [getAllFriends, getFriends],
  (allFriends, currentFriendsSelection) => {
    const indexInFriendsList = allFriends.indexOf(
      currentFriendsSelection[currentFriendsSelection.length - 1],
    );

    return indexInFriendsList < allFriends.length - 1;
  },
);

/**
 * get the information if there are friends before the current page
 *
 * @returns {boolean}
 */
export const hasPreviousFriends = createSelector(
  [getAllFriends, getFriends],
  (allFriends, currentFriendsSelection) => {
    const indexInFriendsList = allFriends.indexOf(currentFriendsSelection[0]);

    return indexInFriendsList > 1;
  },
);
