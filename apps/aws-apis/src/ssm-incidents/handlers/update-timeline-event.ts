import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateTimelineEventRoute } from '../routes'

const app = new OpenAPIHono()

export const updateTimelineEventHandler = app.openapi(postUpdateTimelineEventRoute, (c) => {
  throw new Error('Not implemented')
})
