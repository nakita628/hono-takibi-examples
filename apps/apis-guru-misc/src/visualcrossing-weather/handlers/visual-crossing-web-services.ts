import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVisualCrossingWebServicesRestServicesTimelineLocationRoute,
  getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateRoute,
  getVisualCrossingWebServicesRestServicesTimelineLocationStartdateRoute,
  getVisualCrossingWebServicesRestServicesWeatherdataForecastRoute,
  getVisualCrossingWebServicesRestServicesWeatherdataHistoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const visualCrossingWebServicesHandler = app
  .openapi(getVisualCrossingWebServicesRestServicesTimelineLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVisualCrossingWebServicesRestServicesTimelineLocationStartdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVisualCrossingWebServicesRestServicesWeatherdataForecastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVisualCrossingWebServicesRestServicesWeatherdataHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
