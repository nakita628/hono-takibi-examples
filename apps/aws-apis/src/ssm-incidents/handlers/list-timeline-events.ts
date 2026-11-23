import { OpenAPIHono } from '@hono/zod-openapi'
import { postListTimelineEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const listTimelineEventsHandler = app.openapi(postListTimelineEventsRoute, (c) => {
  throw new Error('Not implemented')
})
