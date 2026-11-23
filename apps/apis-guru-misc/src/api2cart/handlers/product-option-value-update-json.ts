import { OpenAPIHono } from '@hono/zod-openapi'
import { putProductOptionValueUpdateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productOptionValueUpdateJsonHandler = app.openapi(
  putProductOptionValueUpdateJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
