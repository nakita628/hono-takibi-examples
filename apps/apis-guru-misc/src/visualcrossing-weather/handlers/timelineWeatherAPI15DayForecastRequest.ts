import { OpenAPIHono } from '@hono/zod-openapi'
import { getVisualCrossingWebServicesRestServicesTimelineLocationRoute } from '../routes'

const app = new OpenAPIHono()

export const timelineWeatherAPI15DayForecastRequestHandler = app.openapi(
  getVisualCrossingWebServicesRestServicesTimelineLocationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
