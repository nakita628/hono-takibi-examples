import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductOptionValueAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productOptionValueAddJsonHandler = app.openapi(
  postProductOptionValueAddJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
