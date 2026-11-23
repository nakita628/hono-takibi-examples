import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthorizeRoute } from '../routes'

const app = new OpenAPIHono()

export const authorizeHandler = app.openapi(postAuthorizeRoute, (c) => {
  throw new Error('Not implemented')
})
