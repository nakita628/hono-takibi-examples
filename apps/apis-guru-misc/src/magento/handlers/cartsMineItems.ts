import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsMineItemsRoute, postV1CartsMineItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineItemsHandler = app
  .openapi(getV1CartsMineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
