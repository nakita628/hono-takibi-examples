import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthorizeRoute } from '../routes'

const app = new OpenAPIHono()

export const authorizeHandler = app.openapi(getAuthorizeRoute, (c) => {
  throw new Error('Not implemented')
})
