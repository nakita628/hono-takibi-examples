import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiJobsSubmissionIdRoute,
  getApiJobsRoute,
  getApiJobsSubmissionIdLogsRoute,
  getApiJobsSubmissionIdLogsTailRoute,
  getApiJobsSubmissionIdRoute,
  getApiVersionRoute,
  postApiJobsRoute,
  postApiJobsSubmissionIdStopRoute,
} from './routes'
import {
  deleteApiJobsSubmissionIdRouteHandler,
  getApiJobsRouteHandler,
  getApiJobsSubmissionIdLogsRouteHandler,
  getApiJobsSubmissionIdLogsTailRouteHandler,
  getApiJobsSubmissionIdRouteHandler,
  getApiVersionRouteHandler,
  postApiJobsRouteHandler,
  postApiJobsSubmissionIdStopRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiVersionRoute, getApiVersionRouteHandler)
  .openapi(postApiJobsRoute, postApiJobsRouteHandler)
  .openapi(getApiJobsRoute, getApiJobsRouteHandler)
  .openapi(getApiJobsSubmissionIdRoute, getApiJobsSubmissionIdRouteHandler)
  .openapi(deleteApiJobsSubmissionIdRoute, deleteApiJobsSubmissionIdRouteHandler)
  .openapi(postApiJobsSubmissionIdStopRoute, postApiJobsSubmissionIdStopRouteHandler)
  .openapi(getApiJobsSubmissionIdLogsRoute, getApiJobsSubmissionIdLogsRouteHandler)
  .openapi(getApiJobsSubmissionIdLogsTailRoute, getApiJobsSubmissionIdLogsTailRouteHandler)

export default app
