import { OpenAPIHono } from '@hono/zod-openapi'
import { putProductUpdateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productUpdateJsonHandler = app.openapi(putProductUpdateJsonRoute, (c) => {
  throw new Error('Not implemented')
})
