import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeedV1CalendarLidarrIcsRoute } from '../routes'

const app = new OpenAPIHono()

export const feedHandler = app.openapi(getFeedV1CalendarLidarrIcsRoute, (c) => {
  throw new Error('Not implemented')
})
