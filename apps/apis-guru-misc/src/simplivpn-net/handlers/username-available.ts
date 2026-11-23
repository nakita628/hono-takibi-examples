import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsernameAvailableRoute } from '../routes'

const app = new OpenAPIHono()

export const usernameAvailableHandler = app.openapi(postUsernameAvailableRoute, (c) => {
  throw new Error('Not implemented')
})
