import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameDeleteRevisionRoute,
  deleteV1NameRoute,
  getV1NameGetContentsRoute,
  getV1NameListRevisionsRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentApisRoute,
  getV1ParentArtifactsRoute,
  getV1ParentDeploymentsRoute,
  getV1ParentSpecsRoute,
  getV1ParentVersionsRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1NameRollbackRoute,
  postV1NameTagRevisionRoute,
  postV1ParentApisRoute,
  postV1ParentArtifactsRoute,
  postV1ParentDeploymentsRoute,
  postV1ParentInstancesRoute,
  postV1ParentSpecsRoute,
  postV1ParentVersionsRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
  putV1NameRoute,
} from './routes'
import {
  deleteV1NameDeleteRevisionRouteHandler,
  deleteV1NameRouteHandler,
  getV1NameGetContentsRouteHandler,
  getV1NameListRevisionsRouteHandler,
  getV1NameLocationsRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentApisRouteHandler,
  getV1ParentArtifactsRouteHandler,
  getV1ParentDeploymentsRouteHandler,
  getV1ParentSpecsRouteHandler,
  getV1ParentVersionsRouteHandler,
  getV1ResourceGetIamPolicyRouteHandler,
  patchV1NameRouteHandler,
  postV1NameCancelRouteHandler,
  postV1NameRollbackRouteHandler,
  postV1NameTagRevisionRouteHandler,
  postV1ParentApisRouteHandler,
  postV1ParentArtifactsRouteHandler,
  postV1ParentDeploymentsRouteHandler,
  postV1ParentInstancesRouteHandler,
  postV1ParentSpecsRouteHandler,
  postV1ParentVersionsRouteHandler,
  postV1ResourceSetIamPolicyRouteHandler,
  postV1ResourceTestIamPermissionsRouteHandler,
  putV1NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(putV1NameRoute, putV1NameRouteHandler)
  .openapi(getV1NameLocationsRoute, getV1NameLocationsRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(deleteV1NameDeleteRevisionRoute, deleteV1NameDeleteRevisionRouteHandler)
  .openapi(getV1NameGetContentsRoute, getV1NameGetContentsRouteHandler)
  .openapi(getV1NameListRevisionsRoute, getV1NameListRevisionsRouteHandler)
  .openapi(postV1NameRollbackRoute, postV1NameRollbackRouteHandler)
  .openapi(postV1NameTagRevisionRoute, postV1NameTagRevisionRouteHandler)
  .openapi(getV1ParentApisRoute, getV1ParentApisRouteHandler)
  .openapi(postV1ParentApisRoute, postV1ParentApisRouteHandler)
  .openapi(getV1ParentArtifactsRoute, getV1ParentArtifactsRouteHandler)
  .openapi(postV1ParentArtifactsRoute, postV1ParentArtifactsRouteHandler)
  .openapi(getV1ParentDeploymentsRoute, getV1ParentDeploymentsRouteHandler)
  .openapi(postV1ParentDeploymentsRoute, postV1ParentDeploymentsRouteHandler)
  .openapi(postV1ParentInstancesRoute, postV1ParentInstancesRouteHandler)
  .openapi(getV1ParentSpecsRoute, getV1ParentSpecsRouteHandler)
  .openapi(postV1ParentSpecsRoute, postV1ParentSpecsRouteHandler)
  .openapi(getV1ParentVersionsRoute, getV1ParentVersionsRouteHandler)
  .openapi(postV1ParentVersionsRoute, postV1ParentVersionsRouteHandler)
  .openapi(getV1ResourceGetIamPolicyRoute, getV1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1ResourceSetIamPolicyRoute, postV1ResourceSetIamPolicyRouteHandler)
  .openapi(postV1ResourceTestIamPermissionsRoute, postV1ResourceTestIamPermissionsRouteHandler)

export default app
