import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameOperationsRoute,
  getV1betaNameRoute,
  getV1betaParentWorkstationClustersRoute,
  getV1betaParentWorkstationConfigsListUsableRoute,
  getV1betaParentWorkstationConfigsRoute,
  getV1betaParentWorkstationsListUsableRoute,
  getV1betaParentWorkstationsRoute,
  getV1betaResourceGetIamPolicyRoute,
  patchV1betaNameRoute,
  postV1betaNameCancelRoute,
  postV1betaNameStartRoute,
  postV1betaNameStopRoute,
  postV1betaParentWorkstationClustersRoute,
  postV1betaParentWorkstationConfigsRoute,
  postV1betaParentWorkstationsRoute,
  postV1betaResourceSetIamPolicyRoute,
  postV1betaResourceTestIamPermissionsRoute,
  postV1betaWorkstationGenerateAccessTokenRoute,
} from './routes'
import {
  deleteV1betaNameRouteHandler,
  getV1betaNameOperationsRouteHandler,
  getV1betaNameRouteHandler,
  getV1betaParentWorkstationClustersRouteHandler,
  getV1betaParentWorkstationConfigsListUsableRouteHandler,
  getV1betaParentWorkstationConfigsRouteHandler,
  getV1betaParentWorkstationsListUsableRouteHandler,
  getV1betaParentWorkstationsRouteHandler,
  getV1betaResourceGetIamPolicyRouteHandler,
  patchV1betaNameRouteHandler,
  postV1betaNameCancelRouteHandler,
  postV1betaNameStartRouteHandler,
  postV1betaNameStopRouteHandler,
  postV1betaParentWorkstationClustersRouteHandler,
  postV1betaParentWorkstationConfigsRouteHandler,
  postV1betaParentWorkstationsRouteHandler,
  postV1betaResourceSetIamPolicyRouteHandler,
  postV1betaResourceTestIamPermissionsRouteHandler,
  postV1betaWorkstationGenerateAccessTokenRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1betaNameRoute, deleteV1betaNameRouteHandler)
  .openapi(getV1betaNameRoute, getV1betaNameRouteHandler)
  .openapi(patchV1betaNameRoute, patchV1betaNameRouteHandler)
  .openapi(getV1betaNameOperationsRoute, getV1betaNameOperationsRouteHandler)
  .openapi(postV1betaNameCancelRoute, postV1betaNameCancelRouteHandler)
  .openapi(postV1betaNameStartRoute, postV1betaNameStartRouteHandler)
  .openapi(postV1betaNameStopRoute, postV1betaNameStopRouteHandler)
  .openapi(getV1betaParentWorkstationClustersRoute, getV1betaParentWorkstationClustersRouteHandler)
  .openapi(
    postV1betaParentWorkstationClustersRoute,
    postV1betaParentWorkstationClustersRouteHandler,
  )
  .openapi(getV1betaParentWorkstationConfigsRoute, getV1betaParentWorkstationConfigsRouteHandler)
  .openapi(postV1betaParentWorkstationConfigsRoute, postV1betaParentWorkstationConfigsRouteHandler)
  .openapi(
    getV1betaParentWorkstationConfigsListUsableRoute,
    getV1betaParentWorkstationConfigsListUsableRouteHandler,
  )
  .openapi(getV1betaParentWorkstationsRoute, getV1betaParentWorkstationsRouteHandler)
  .openapi(postV1betaParentWorkstationsRoute, postV1betaParentWorkstationsRouteHandler)
  .openapi(
    getV1betaParentWorkstationsListUsableRoute,
    getV1betaParentWorkstationsListUsableRouteHandler,
  )
  .openapi(getV1betaResourceGetIamPolicyRoute, getV1betaResourceGetIamPolicyRouteHandler)
  .openapi(postV1betaResourceSetIamPolicyRoute, postV1betaResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1betaResourceTestIamPermissionsRoute,
    postV1betaResourceTestIamPermissionsRouteHandler,
  )
  .openapi(
    postV1betaWorkstationGenerateAccessTokenRoute,
    postV1betaWorkstationGenerateAccessTokenRouteHandler,
  )

export default app
