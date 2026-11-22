import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiFollowsTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const followedTagsHandler = app.openapi(getApiFollowsTagsRoute, (c) => {
  throw new Error('Not implemented')
})
