import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthorizeTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const authorizeTokenHandler = app.openapi(postAuthorizeTokenRoute, (c) => {
  throw new Error('Not implemented')
})
