import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiFollowersUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const followersHandler = app.openapi(getApiFollowersUsersRoute, (c) => {
  throw new Error('Not implemented')
})
