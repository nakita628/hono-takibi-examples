import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2UsersIdBookmarksTweetIdRoute,
  delete2UsersIdFollowedListsListIdRoute,
  delete2UsersIdLikesTweetIdRoute,
  delete2UsersIdPinnedListsListIdRoute,
  delete2UsersIdRetweetsSourceTweetIdRoute,
  delete2UsersSourceUserIdBlockingTargetUserIdRoute,
  delete2UsersSourceUserIdFollowingTargetUserIdRoute,
  delete2UsersSourceUserIdMutingTargetUserIdRoute,
  get2UsersByRoute,
  get2UsersByUsernameUsernameRoute,
  get2UsersIdAffiliatesRoute,
  get2UsersIdBlockingRoute,
  get2UsersIdBookmarksFoldersFolderIdRoute,
  get2UsersIdBookmarksFoldersRoute,
  get2UsersIdBookmarksRoute,
  get2UsersIdFollowedListsRoute,
  get2UsersIdFollowersRoute,
  get2UsersIdFollowingRoute,
  get2UsersIdLikedTweetsRoute,
  get2UsersIdListMembershipsRoute,
  get2UsersIdMentionsRoute,
  get2UsersIdMutingRoute,
  get2UsersIdOwnedListsRoute,
  get2UsersIdPinnedListsRoute,
  get2UsersIdPublicKeysRoute,
  get2UsersIdRoute,
  get2UsersIdTimelinesReverseChronologicalRoute,
  get2UsersIdTweetsRoute,
  get2UsersMeFollowersRoute,
  get2UsersMeFollowingRoute,
  get2UsersMeRoute,
  get2UsersPublicKeysRoute,
  get2UsersRepostsOfMeRoute,
  get2UsersRoute,
  get2UsersSearchRoute,
  post2UsersIdBlockingRoute,
  post2UsersIdBookmarksFoldersRoute,
  post2UsersIdBookmarksRoute,
  post2UsersIdDmBlockRoute,
  post2UsersIdDmUnblockRoute,
  post2UsersIdFollowedListsRoute,
  post2UsersIdFollowingRoute,
  post2UsersIdLikesRoute,
  post2UsersIdMutingRoute,
  post2UsersIdPinnedListsRoute,
  post2UsersIdRetweetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(get2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersByRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersByUsernameUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersMeFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersMeFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersPublicKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersRepostsOfMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdAffiliatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdBlockingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdBlockingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdBookmarksFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdBookmarksFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdBookmarksFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersIdBookmarksTweetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdDmBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdDmUnblockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdFollowedListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdFollowedListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersIdFollowedListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdLikedTweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersIdLikesTweetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdListMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdMentionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdMutingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdMutingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdOwnedListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdPinnedListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdPinnedListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersIdPinnedListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdPublicKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdRetweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersIdRetweetsSourceTweetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdTimelinesReverseChronologicalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdTweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersSourceUserIdBlockingTargetUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersSourceUserIdFollowingTargetUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersSourceUserIdMutingTargetUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
