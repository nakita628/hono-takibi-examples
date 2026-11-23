import { OpenAPIHono } from '@hono/zod-openapi'
import { getTimelineHourlyRoute, getTimelineRoute } from '../routes'

const app = new OpenAPIHono()

export const timelineHandler = app
  .openapi(getTimelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimelineHourlyRoute, (c) => {
    throw new Error('Not implemented')
  })
