import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdFavoriteItemsItemIdRoute,
  deleteUsersUserIdItemsItemIdRatingRoute,
  getUsersUserIdItemsItemIdIntrosRoute,
  getUsersUserIdItemsItemIdLocalTrailersRoute,
  getUsersUserIdItemsItemIdRoute,
  getUsersUserIdItemsItemIdSpecialFeaturesRoute,
  getUsersUserIdItemsLatestRoute,
  getUsersUserIdItemsRootRoute,
  postUsersUserIdFavoriteItemsItemIdRoute,
  postUsersUserIdItemsItemIdRatingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userLibraryHandler = app
  .openapi(deleteUsersUserIdFavoriteItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdFavoriteItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdItemsLatestRoute, (c) => {
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
