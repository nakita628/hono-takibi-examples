import { OpenAPIHono } from '@hono/zod-openapi'
import { getFollowersRoute } from '../routes'

const app = new OpenAPIHono()

export const followersHandler = app.openapi(getFollowersRoute, (c) => {
  throw new Error('Not implemented')
})
