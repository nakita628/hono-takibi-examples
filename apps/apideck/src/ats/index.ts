import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAtsApplicantsIdRoute,
  getAtsApplicantsRoute,
  getAtsJobsIdRoute,
  getAtsJobsRoute,
  postAtsApplicantsRoute,
} from './routes'
import {
  getAtsApplicantsIdRouteHandler,
  getAtsApplicantsRouteHandler,
  getAtsJobsIdRouteHandler,
  getAtsJobsRouteHandler,
  postAtsApplicantsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAtsApplicantsRoute, getAtsApplicantsRouteHandler)
  .openapi(postAtsApplicantsRoute, postAtsApplicantsRouteHandler)
  .openapi(getAtsApplicantsIdRoute, getAtsApplicantsIdRouteHandler)
  .openapi(getAtsJobsRoute, getAtsJobsRouteHandler)
  .openapi(getAtsJobsIdRoute, getAtsJobsIdRouteHandler)

export default app
