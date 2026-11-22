import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserFavoriteItemsItemIdRoute,
  deleteUserItemsItemIdRatingRoute,
  deleteUserPlayedItemsItemIdRoute,
  getUserItemsItemIdUserDataRoute,
  postUserFavoriteItemsItemIdRoute,
  postUserItemsItemIdRatingRoute,
  postUserItemsItemIdUserDataRoute,
  postUserPlayedItemsItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userDataHandler = app
  .openapi(getUserItemsItemIdUserDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserItemsItemIdUserDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserPlayedItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserPlayedItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserFavoriteItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserFavoriteItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserItemsItemIdRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserItemsItemIdRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
