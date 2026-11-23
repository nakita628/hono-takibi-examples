import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameLocationsRoute,
  getV1betaNameOperationsRoute,
  getV1betaNameRoute,
  getV1betaParentBackupsRoute,
  getV1betaParentFederationsRoute,
  getV1betaParentMetadataImportsRoute,
  getV1betaParentServicesRoute,
  getV1betaResourceGetIamPolicyRoute,
  patchV1betaNameRoute,
  postV1betaNameCancelRoute,
  postV1betaParentBackupsRoute,
  postV1betaParentFederationsRoute,
  postV1betaParentMetadataImportsRoute,
  postV1betaParentServicesRoute,
  postV1betaResourceRemoveIamPolicyRoute,
  postV1betaResourceSetIamPolicyRoute,
  postV1betaResourceTestIamPermissionsRoute,
  postV1betaServiceAlterLocationRoute,
  postV1betaServiceExportMetadataRoute,
  postV1betaServiceMoveTableToDatabaseRoute,
  postV1betaServiceQueryMetadataRoute,
  postV1betaServiceRestoreRoute,
} from './routes'
import {
  deleteV1betaNameRouteHandler,
  getV1betaNameLocationsRouteHandler,
  getV1betaNameOperationsRouteHandler,
  getV1betaNameRouteHandler,
  getV1betaParentBackupsRouteHandler,
  getV1betaParentFederationsRouteHandler,
  getV1betaParentMetadataImportsRouteHandler,
  getV1betaParentServicesRouteHandler,
  getV1betaResourceGetIamPolicyRouteHandler,
  patchV1betaNameRouteHandler,
  postV1betaNameCancelRouteHandler,
  postV1betaParentBackupsRouteHandler,
  postV1betaParentFederationsRouteHandler,
  postV1betaParentMetadataImportsRouteHandler,
  postV1betaParentServicesRouteHandler,
  postV1betaResourceRemoveIamPolicyRouteHandler,
  postV1betaResourceSetIamPolicyRouteHandler,
  postV1betaResourceTestIamPermissionsRouteHandler,
  postV1betaServiceAlterLocationRouteHandler,
  postV1betaServiceExportMetadataRouteHandler,
  postV1betaServiceMoveTableToDatabaseRouteHandler,
  postV1betaServiceQueryMetadataRouteHandler,
  postV1betaServiceRestoreRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1betaNameRoute, deleteV1betaNameRouteHandler)
  .openapi(getV1betaNameRoute, getV1betaNameRouteHandler)
  .openapi(patchV1betaNameRoute, patchV1betaNameRouteHandler)
  .openapi(getV1betaNameLocationsRoute, getV1betaNameLocationsRouteHandler)
  .openapi(getV1betaNameOperationsRoute, getV1betaNameOperationsRouteHandler)
  .openapi(postV1betaNameCancelRoute, postV1betaNameCancelRouteHandler)
  .openapi(getV1betaParentBackupsRoute, getV1betaParentBackupsRouteHandler)
  .openapi(postV1betaParentBackupsRoute, postV1betaParentBackupsRouteHandler)
  .openapi(getV1betaParentFederationsRoute, getV1betaParentFederationsRouteHandler)
  .openapi(postV1betaParentFederationsRoute, postV1betaParentFederationsRouteHandler)
  .openapi(getV1betaParentMetadataImportsRoute, getV1betaParentMetadataImportsRouteHandler)
  .openapi(postV1betaParentMetadataImportsRoute, postV1betaParentMetadataImportsRouteHandler)
  .openapi(getV1betaParentServicesRoute, getV1betaParentServicesRouteHandler)
  .openapi(postV1betaParentServicesRoute, postV1betaParentServicesRouteHandler)
  .openapi(getV1betaResourceGetIamPolicyRoute, getV1betaResourceGetIamPolicyRouteHandler)
  .openapi(postV1betaResourceRemoveIamPolicyRoute, postV1betaResourceRemoveIamPolicyRouteHandler)
  .openapi(postV1betaResourceSetIamPolicyRoute, postV1betaResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1betaResourceTestIamPermissionsRoute,
    postV1betaResourceTestIamPermissionsRouteHandler,
  )
  .openapi(postV1betaServiceAlterLocationRoute, postV1betaServiceAlterLocationRouteHandler)
  .openapi(postV1betaServiceExportMetadataRoute, postV1betaServiceExportMetadataRouteHandler)
  .openapi(
    postV1betaServiceMoveTableToDatabaseRoute,
    postV1betaServiceMoveTableToDatabaseRouteHandler,
  )
  .openapi(postV1betaServiceQueryMetadataRoute, postV1betaServiceQueryMetadataRouteHandler)
  .openapi(postV1betaServiceRestoreRoute, postV1betaServiceRestoreRouteHandler)

export default app
