import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeedV3CalendarRadarrIcsRoute } from '../routes'

const app = new OpenAPIHono()

export const feedHandler = app.openapi(getFeedV3CalendarRadarrIcsRoute, (c) => {
  throw new Error('Not implemented')
})
