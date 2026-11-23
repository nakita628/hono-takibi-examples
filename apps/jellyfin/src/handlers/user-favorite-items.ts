import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteUserFavoriteItemsItemIdRoute, postUserFavoriteItemsItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const userFavoriteItemsHandler = app
  .openapi(postUserFavoriteItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserFavoriteItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
