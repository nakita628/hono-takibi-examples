import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetClubsForTopicRoute } from '../routes'

const app = new OpenAPIHono()

export const getClubsForTopicHandler = app.openapi(postGetClubsForTopicRoute, (c) => {
  throw new Error('Not implemented')
})
