import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsMineCheckoutFieldsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineCheckoutFieldsHandler = app.openapi(
  postV1CartsMineCheckoutFieldsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
