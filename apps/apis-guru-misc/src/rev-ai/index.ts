import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteJobsIdRoute,
  getAccountRoute,
  getJobsIdCaptionsRoute,
  getJobsIdRoute,
  getJobsIdTranscriptRoute,
  getJobsRoute,
  postJobsRoute,
} from './routes'
import {
  deleteJobsIdRouteHandler,
  getAccountRouteHandler,
  getJobsIdCaptionsRouteHandler,
  getJobsIdRouteHandler,
  getJobsIdTranscriptRouteHandler,
  getJobsRouteHandler,
  postJobsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(getJobsRoute, getJobsRouteHandler)
  .openapi(postJobsRoute, postJobsRouteHandler)
  .openapi(deleteJobsIdRoute, deleteJobsIdRouteHandler)
  .openapi(getJobsIdRoute, getJobsIdRouteHandler)
  .openapi(getJobsIdCaptionsRoute, getJobsIdCaptionsRouteHandler)
  .openapi(getJobsIdTranscriptRoute, getJobsIdTranscriptRouteHandler)

export default app
