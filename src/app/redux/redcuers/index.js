import { combineReducers } from "redux";
import { timelineTweets, stats, userTweets } from "./post";
import { currentUser } from "./auth";
import { header } from "./header";
import { users, profile, following, followers } from "./profile";


const allReducers = combineReducers({
  timelineTweets,
  currentUser,
  header,
  users,
  stats,
  profile,
  userTweets,
  following,
  followers
});
export default allReducers;
