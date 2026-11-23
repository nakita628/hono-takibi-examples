import { OpenAPIHono } from '@hono/zod-openapi'
import { putInvalidateAllTokensRoute } from '../routes'

const app = new OpenAPIHono()

export const invalidateAllTokensHandler = app.openapi(putInvalidateAllTokensRoute, (c) => {
  throw new Error('Not implemented')
})
