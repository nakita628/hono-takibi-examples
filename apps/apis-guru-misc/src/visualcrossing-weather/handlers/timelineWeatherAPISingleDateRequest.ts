import { OpenAPIHono } from '@hono/zod-openapi'
import { getVisualCrossingWebServicesRestServicesTimelineLocationStartdateRoute } from '../routes'

const app = new OpenAPIHono()

export const timelineWeatherAPISingleDateRequestHandler = app.openapi(
  getVisualCrossingWebServicesRestServicesTimelineLocationStartdateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
