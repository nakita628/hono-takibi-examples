import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVisualCrossingWebServicesRestServicesTimelineLocationRoute,
  getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateRoute,
  getVisualCrossingWebServicesRestServicesTimelineLocationStartdateRoute,
  getVisualCrossingWebServicesRestServicesWeatherdataForecastRoute,
  getVisualCrossingWebServicesRestServicesWeatherdataHistoryRoute,
} from './routes'
import {
  getVisualCrossingWebServicesRestServicesTimelineLocationRouteHandler,
  getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateRouteHandler,
  getVisualCrossingWebServicesRestServicesTimelineLocationStartdateRouteHandler,
  getVisualCrossingWebServicesRestServicesWeatherdataForecastRouteHandler,
  getVisualCrossingWebServicesRestServicesWeatherdataHistoryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getVisualCrossingWebServicesRestServicesTimelineLocationRoute,
    getVisualCrossingWebServicesRestServicesTimelineLocationRouteHandler,
  )
  .openapi(
    getVisualCrossingWebServicesRestServicesTimelineLocationStartdateRoute,
    getVisualCrossingWebServicesRestServicesTimelineLocationStartdateRouteHandler,
  )
  .openapi(
    getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateRoute,
    getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateRouteHandler,
  )
  .openapi(
    getVisualCrossingWebServicesRestServicesWeatherdataForecastRoute,
    getVisualCrossingWebServicesRestServicesWeatherdataForecastRouteHandler,
  )
  .openapi(
    getVisualCrossingWebServicesRestServicesWeatherdataHistoryRoute,
    getVisualCrossingWebServicesRestServicesWeatherdataHistoryRouteHandler,
  )

export default app
