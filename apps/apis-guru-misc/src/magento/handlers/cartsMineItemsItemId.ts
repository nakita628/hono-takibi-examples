import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1CartsMineItemsItemIdRoute, putV1CartsMineItemsItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineItemsItemIdHandler = app
  .openapi(deleteV1CartsMineItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsMineItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
