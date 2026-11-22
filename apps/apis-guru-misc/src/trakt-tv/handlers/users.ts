import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersIdFollowRoute,
  deleteUsersIdListsListIdLikeRoute,
  deleteUsersIdListsListIdRoute,
  deleteUsersRequestsIdRoute,
  getUsersHiddenSectionRoute,
  getUsersIdCollectionTypeRoute,
  getUsersIdCommentsCommentTypeTypeRoute,
  getUsersIdFollowersRoute,
  getUsersIdFollowingRoute,
  getUsersIdFriendsRoute,
  getUsersIdHistoryTypeItemIdRoute,
  getUsersIdLikesTypeRoute,
  getUsersIdListsCollaborationsRoute,
  getUsersIdListsListIdCommentsSortRoute,
  getUsersIdListsListIdItemsTypeRoute,
  getUsersIdListsListIdLikesRoute,
  getUsersIdListsListIdRoute,
  getUsersIdListsRoute,
  getUsersIdRatingsTypeRatingRoute,
  getUsersIdRecommendationsTypeSortRoute,
  getUsersIdRoute,
  getUsersIdStatsRoute,
  getUsersIdWatchedTypeRoute,
  getUsersIdWatchingRoute,
  getUsersIdWatchlistTypeSortRoute,
  getUsersRequestsFollowingRoute,
  getUsersRequestsRoute,
  getUsersSavedFiltersSectionRoute,
  getUsersSettingsRoute,
  postUsersHiddenSectionRemoveRoute,
  postUsersHiddenSectionRoute,
  postUsersIdFollowRoute,
  postUsersIdListsListIdItemsRemoveRoute,
  postUsersIdListsListIdItemsReorderRoute,
  postUsersIdListsListIdItemsRoute,
  postUsersIdListsListIdLikeRoute,
  postUsersIdListsReorderRoute,
  postUsersIdListsRoute,
  postUsersRequestsIdRoute,
  putUsersIdListsListIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersHiddenSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersHiddenSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersHiddenSectionRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersRequestsFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSavedFiltersSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdCollectionTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdCommentsCommentTypeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdFollowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdFollowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdFriendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdHistoryTypeItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdLikesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdListsCollaborationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdListsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdListsListIdCommentsSortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdListsListIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdListsListIdItemsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdListsListIdItemsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdListsListIdItemsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdListsListIdLikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdListsListIdLikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdListsListIdLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdRatingsTypeRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdRecommendationsTypeSortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdWatchedTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdWatchingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdWatchlistTypeSortRoute, (c) => {
    throw new Error('Not implemented')
  })
