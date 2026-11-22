import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1CartsCartIdItemsItemIdRoute, putV1CartsCartIdItemsItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdItemsItemIdHandler = app
  .openapi(deleteV1CartsCartIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsCartIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
