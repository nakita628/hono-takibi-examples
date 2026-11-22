import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1AuthGrantRoute } from '../routes'

const app = new OpenAPIHono()

export const tokensHandler = app.openapi(postV1AuthGrantRoute, (c) => {
  throw new Error('Not implemented')
})
