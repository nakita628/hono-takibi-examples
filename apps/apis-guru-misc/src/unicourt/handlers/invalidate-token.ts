import { OpenAPIHono } from '@hono/zod-openapi'
import { putInvalidateTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const invalidateTokenHandler = app.openapi(putInvalidateTokenRoute, (c) => {
  throw new Error('Not implemented')
})
