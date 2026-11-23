import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteUserPlayedItemsItemIdRoute, postUserPlayedItemsItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const userPlayedItemsHandler = app
  .openapi(postUserPlayedItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserPlayedItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
