import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentVulnerabilitiesRoute,
  postV1beta1NameCancelRoute,
  postV1beta1NameWaitRoute,
  postV1beta1ParentScansAnalyzePackagesRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameOperationsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentVulnerabilitiesRouteHandler,
  postV1beta1NameCancelRouteHandler,
  postV1beta1NameWaitRouteHandler,
  postV1beta1ParentScansAnalyzePackagesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(getV1beta1NameOperationsRoute, getV1beta1NameOperationsRouteHandler)
  .openapi(postV1beta1NameCancelRoute, postV1beta1NameCancelRouteHandler)
  .openapi(postV1beta1NameWaitRoute, postV1beta1NameWaitRouteHandler)
  .openapi(
    postV1beta1ParentScansAnalyzePackagesRoute,
    postV1beta1ParentScansAnalyzePackagesRouteHandler,
  )
  .openapi(getV1beta1ParentVulnerabilitiesRoute, getV1beta1ParentVulnerabilitiesRouteHandler)

export default app
