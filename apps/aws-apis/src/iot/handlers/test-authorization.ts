import { OpenAPIHono } from '@hono/zod-openapi'
import { postTestAuthorizationRoute } from '../routes'

const app = new OpenAPIHono()

export const testAuthorizationHandler = app.openapi(postTestAuthorizationRoute, (c) => {
  throw new Error('Not implemented')
})
