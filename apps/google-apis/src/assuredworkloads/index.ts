import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentViolationsRoute,
  getV1beta1ParentWorkloadsRoute,
  getV1beta1ProjectTargetAnalyzeWorkloadMoveRoute,
  getV1beta1SourceTargetAnalyzeWorkloadMoveRoute,
  patchV1beta1NameRoute,
  postV1beta1NameAcknowledgeRoute,
  postV1beta1NameRestrictAllowedResourcesRoute,
  postV1beta1ParentWorkloadsRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameOperationsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentViolationsRouteHandler,
  getV1beta1ParentWorkloadsRouteHandler,
  getV1beta1ProjectTargetAnalyzeWorkloadMoveRouteHandler,
  getV1beta1SourceTargetAnalyzeWorkloadMoveRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1NameAcknowledgeRouteHandler,
  postV1beta1NameRestrictAllowedResourcesRouteHandler,
  postV1beta1ParentWorkloadsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1NameOperationsRoute, getV1beta1NameOperationsRouteHandler)
  .openapi(postV1beta1NameAcknowledgeRoute, postV1beta1NameAcknowledgeRouteHandler)
  .openapi(
    postV1beta1NameRestrictAllowedResourcesRoute,
    postV1beta1NameRestrictAllowedResourcesRouteHandler,
  )
  .openapi(getV1beta1ParentViolationsRoute, getV1beta1ParentViolationsRouteHandler)
  .openapi(getV1beta1ParentWorkloadsRoute, getV1beta1ParentWorkloadsRouteHandler)
  .openapi(postV1beta1ParentWorkloadsRoute, postV1beta1ParentWorkloadsRouteHandler)
  .openapi(
    getV1beta1ProjectTargetAnalyzeWorkloadMoveRoute,
    getV1beta1ProjectTargetAnalyzeWorkloadMoveRouteHandler,
  )
  .openapi(
    getV1beta1SourceTargetAnalyzeWorkloadMoveRoute,
    getV1beta1SourceTargetAnalyzeWorkloadMoveRouteHandler,
  )

export default app
