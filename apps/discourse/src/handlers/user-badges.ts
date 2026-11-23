import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserBadgesUsernameJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const userBadgesHandler = app.openapi(getUserBadgesUsernameJsonRoute, (c) => {
  throw new Error('Not implemented')
})
