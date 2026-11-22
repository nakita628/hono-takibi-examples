import { OpenAPIHono } from '@hono/zod-openapi'
import { getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateRoute } from '../routes'

const app = new OpenAPIHono()

export const timelineWeatherAPIDateRangeRequestHandler = app.openapi(
  getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
