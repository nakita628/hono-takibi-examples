import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnythingOpenIdConnectRoute } from '../routes'

const app = new OpenAPIHono()

export const openIDConnectHandler = app.openapi(postAnythingOpenIdConnectRoute, (c) => {
  throw new Error('Not implemented')
})
