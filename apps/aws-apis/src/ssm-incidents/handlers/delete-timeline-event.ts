import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteTimelineEventRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteTimelineEventHandler = app.openapi(postDeleteTimelineEventRoute, (c) => {
  throw new Error('Not implemented')
})
