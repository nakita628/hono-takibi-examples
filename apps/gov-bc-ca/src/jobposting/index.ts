import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIndustriesRoute,
  getJobTypesRoute,
  getMajorProjectsRoute,
  getRegionsRoute,
  postJobsRoute,
} from './routes'
import {
  getIndustriesRouteHandler,
  getJobTypesRouteHandler,
  getMajorProjectsRouteHandler,
  getRegionsRouteHandler,
  postJobsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getIndustriesRoute, getIndustriesRouteHandler)
  .openapi(getJobTypesRoute, getJobTypesRouteHandler)
  .openapi(postJobsRoute, postJobsRouteHandler)
  .openapi(getMajorProjectsRoute, getMajorProjectsRouteHandler)
  .openapi(getRegionsRoute, getRegionsRouteHandler)

export default app
