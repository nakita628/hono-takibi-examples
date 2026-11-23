import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3p1beta1NameRoute,
  getV3p1beta1NameCompleteRoute,
  getV3p1beta1NameRoute,
  getV3p1beta1ParentCompaniesRoute,
  getV3p1beta1ParentJobsRoute,
  patchV3p1beta1NameRoute,
  postV3p1beta1ParentClientEventsRoute,
  postV3p1beta1ParentCompaniesRoute,
  postV3p1beta1ParentJobsBatchDeleteRoute,
  postV3p1beta1ParentJobsRoute,
  postV3p1beta1ParentJobsSearchForAlertRoute,
  postV3p1beta1ParentJobsSearchRoute,
} from './routes'
import {
  deleteV3p1beta1NameRouteHandler,
  getV3p1beta1NameCompleteRouteHandler,
  getV3p1beta1NameRouteHandler,
  getV3p1beta1ParentCompaniesRouteHandler,
  getV3p1beta1ParentJobsRouteHandler,
  patchV3p1beta1NameRouteHandler,
  postV3p1beta1ParentClientEventsRouteHandler,
  postV3p1beta1ParentCompaniesRouteHandler,
  postV3p1beta1ParentJobsBatchDeleteRouteHandler,
  postV3p1beta1ParentJobsRouteHandler,
  postV3p1beta1ParentJobsSearchForAlertRouteHandler,
  postV3p1beta1ParentJobsSearchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV3p1beta1NameRoute, deleteV3p1beta1NameRouteHandler)
  .openapi(getV3p1beta1NameRoute, getV3p1beta1NameRouteHandler)
  .openapi(patchV3p1beta1NameRoute, patchV3p1beta1NameRouteHandler)
  .openapi(getV3p1beta1NameCompleteRoute, getV3p1beta1NameCompleteRouteHandler)
  .openapi(postV3p1beta1ParentClientEventsRoute, postV3p1beta1ParentClientEventsRouteHandler)
  .openapi(getV3p1beta1ParentCompaniesRoute, getV3p1beta1ParentCompaniesRouteHandler)
  .openapi(postV3p1beta1ParentCompaniesRoute, postV3p1beta1ParentCompaniesRouteHandler)
  .openapi(getV3p1beta1ParentJobsRoute, getV3p1beta1ParentJobsRouteHandler)
  .openapi(postV3p1beta1ParentJobsRoute, postV3p1beta1ParentJobsRouteHandler)
  .openapi(postV3p1beta1ParentJobsBatchDeleteRoute, postV3p1beta1ParentJobsBatchDeleteRouteHandler)
  .openapi(postV3p1beta1ParentJobsSearchRoute, postV3p1beta1ParentJobsSearchRouteHandler)
  .openapi(
    postV3p1beta1ParentJobsSearchForAlertRoute,
    postV3p1beta1ParentJobsSearchForAlertRouteHandler,
  )

export default app
