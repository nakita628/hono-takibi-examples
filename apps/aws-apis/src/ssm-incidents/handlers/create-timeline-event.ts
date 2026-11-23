import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateTimelineEventRoute } from '../routes'

const app = new OpenAPIHono()

export const createTimelineEventHandler = app.openapi(postCreateTimelineEventRoute, (c) => {
  throw new Error('Not implemented')
})
