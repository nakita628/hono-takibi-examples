import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthkitOauth2CompleteRoute } from '../routes'

const app = new OpenAPIHono()

export const workosConnectHandler = app.openapi(postAuthkitOauth2CompleteRoute, (c) => {
  throw new Error('Not implemented')
})
