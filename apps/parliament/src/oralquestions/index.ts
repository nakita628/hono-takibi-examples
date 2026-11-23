import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEarlyDayMotionIdRoute,
  getEarlyDayMotionsListRoute,
  getOralquestionsListRoute,
  getOralquestiontimesListRoute,
} from './routes'
import {
  getEarlyDayMotionIdRouteHandler,
  getEarlyDayMotionsListRouteHandler,
  getOralquestionsListRouteHandler,
  getOralquestiontimesListRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getEarlyDayMotionIdRoute, getEarlyDayMotionIdRouteHandler)
  .openapi(getEarlyDayMotionsListRoute, getEarlyDayMotionsListRouteHandler)
  .openapi(getOralquestionsListRoute, getOralquestionsListRouteHandler)
  .openapi(getOralquestiontimesListRoute, getOralquestiontimesListRouteHandler)

export default app
