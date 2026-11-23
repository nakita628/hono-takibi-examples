import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetFollowingRoute } from '../routes'

const app = new OpenAPIHono()

export const getFollowingHandler = app.openapi(postGetFollowingRoute, (c) => {
  throw new Error('Not implemented')
})
