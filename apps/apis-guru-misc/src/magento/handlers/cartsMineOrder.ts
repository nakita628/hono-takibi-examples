import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CartsMineOrderRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineOrderHandler = app.openapi(putV1CartsMineOrderRoute, (c) => {
  throw new Error('Not implemented')
})
