import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentJobsRoute,
  getV1ParentTasksRoute,
  postV1NameCancelRoute,
  postV1ParentJobsRoute,
  postV1ParentStateReportRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameLocationsRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentJobsRouteHandler,
  getV1ParentTasksRouteHandler,
  postV1NameCancelRouteHandler,
  postV1ParentJobsRouteHandler,
  postV1ParentStateReportRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(getV1NameLocationsRoute, getV1NameLocationsRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(getV1ParentJobsRoute, getV1ParentJobsRouteHandler)
  .openapi(postV1ParentJobsRoute, postV1ParentJobsRouteHandler)
  .openapi(postV1ParentStateReportRoute, postV1ParentStateReportRouteHandler)
  .openapi(getV1ParentTasksRoute, getV1ParentTasksRouteHandler)

export default app
