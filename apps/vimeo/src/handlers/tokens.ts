import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteTokensRoute } from '../routes'

const app = new OpenAPIHono()

export const tokensHandler = app.openapi(deleteTokensRoute, (c) => {
  throw new Error('Not implemented')
})
