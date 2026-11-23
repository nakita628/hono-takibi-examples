import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdFavoriteItemsItemIdRoute,
  deleteUsersUserIdImagesImageTypeIndexRoute,
  deleteUsersUserIdImagesImageTypeRoute,
  deleteUsersUserIdItemsItemIdRatingRoute,
  deleteUsersUserIdPlayedItemsItemIdRoute,
  deleteUsersUserIdPlayingItemsItemIdRoute,
  deleteUsersUserIdRoute,
  getUsersMeRoute,
  getUsersPublicRoute,
  getUsersRoute,
  getUsersUserIdGroupingOptionsRoute,
  getUsersUserIdImagesImageTypeImageIndexRoute,
  getUsersUserIdImagesImageTypeRoute,
  getUsersUserIdItemsItemIdIntrosRoute,
  getUsersUserIdItemsItemIdLocalTrailersRoute,
  getUsersUserIdItemsItemIdRoute,
  getUsersUserIdItemsItemIdSpecialFeaturesRoute,
  getUsersUserIdItemsLatestRoute,
  getUsersUserIdItemsResumeRoute,
  getUsersUserIdItemsRootRoute,
  getUsersUserIdItemsRoute,
  getUsersUserIdRoute,
  getUsersUserIdSuggestionsRoute,
  getUsersUserIdViewsRoute,
  headUsersUserIdImagesImageTypeImageIndexRoute,
  headUsersUserIdImagesImageTypeRoute,
  postUsersAuthenticateByNameRoute,
  postUsersAuthenticateWithQuickConnectRoute,
  postUsersForgotPasswordPinRoute,
  postUsersForgotPasswordRoute,
  postUsersNewRoute,
  postUsersUserIdAuthenticateRoute,
  postUsersUserIdConfigurationRoute,
  postUsersUserIdEasyPasswordRoute,
  postUsersUserIdFavoriteItemsItemIdRoute,
  postUsersUserIdImagesImageTypeIndexRoute,
  postUsersUserIdImagesImageTypeRoute,
  postUsersUserIdItemsItemIdRatingRoute,
  postUsersUserIdPasswordRoute,
  postUsersUserIdPlayedItemsItemIdRoute,
  postUsersUserIdPlayingItemsItemIdProgressRoute,
  postUsersUserIdPlayingItemsItemIdRoute,
  postUsersUserIdPolicyRoute,
  postUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersAuthenticateByNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersAuthenticateWithQuickConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersForgotPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersForgotPasswordPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEasyPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdFavoriteItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdFavoriteItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdGroupingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headUsersUserIdImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headUsersUserIdImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdImagesImageTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdImagesImageTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdItemsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdItemsResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdItemsRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdItemsItemIdIntrosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdItemsItemIdLocalTrailersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdItemsItemIdRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdItemsItemIdRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdItemsItemIdSpecialFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPlayedItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPlayedItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPlayingItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPlayingItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPlayingItemsItemIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
