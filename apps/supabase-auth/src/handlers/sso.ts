import { OpenAPIHono } from '@hono/zod-openapi'
import { postSsoRoute } from '../routes'

const app = new OpenAPIHono()

export const ssoHandler = app.openapi(postSsoRoute, (c) => {
  throw new Error('Not implemented')
})
