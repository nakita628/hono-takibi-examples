import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameLocationsRoute,
  getV2NameOperationsRoute,
  getV2NameRoute,
  getV2ParentAppProfilesRoute,
  getV2ParentBackupsRoute,
  getV2ParentClustersRoute,
  getV2ParentHotTabletsRoute,
  getV2ParentInstancesRoute,
  getV2ParentTablesRoute,
  patchV2NameRoute,
  postV2NameCancelRoute,
  postV2NameCheckConsistencyRoute,
  postV2NameDropRowRangeRoute,
  postV2NameGenerateConsistencyTokenRoute,
  postV2NameModifyColumnFamiliesRoute,
  postV2NameUndeleteRoute,
  postV2ParentAppProfilesRoute,
  postV2ParentBackupsCopyRoute,
  postV2ParentBackupsRoute,
  postV2ParentClustersRoute,
  postV2ParentInstancesRoute,
  postV2ParentTablesRestoreRoute,
  postV2ParentTablesRoute,
  postV2ResourceGetIamPolicyRoute,
  postV2ResourceSetIamPolicyRoute,
  postV2ResourceTestIamPermissionsRoute,
  putV2NameRoute,
} from './routes'
import {
  deleteV2NameRouteHandler,
  getV2NameLocationsRouteHandler,
  getV2NameOperationsRouteHandler,
  getV2NameRouteHandler,
  getV2ParentAppProfilesRouteHandler,
  getV2ParentBackupsRouteHandler,
  getV2ParentClustersRouteHandler,
  getV2ParentHotTabletsRouteHandler,
  getV2ParentInstancesRouteHandler,
  getV2ParentTablesRouteHandler,
  patchV2NameRouteHandler,
  postV2NameCancelRouteHandler,
  postV2NameCheckConsistencyRouteHandler,
  postV2NameDropRowRangeRouteHandler,
  postV2NameGenerateConsistencyTokenRouteHandler,
  postV2NameModifyColumnFamiliesRouteHandler,
  postV2NameUndeleteRouteHandler,
  postV2ParentAppProfilesRouteHandler,
  postV2ParentBackupsCopyRouteHandler,
  postV2ParentBackupsRouteHandler,
  postV2ParentClustersRouteHandler,
  postV2ParentInstancesRouteHandler,
  postV2ParentTablesRestoreRouteHandler,
  postV2ParentTablesRouteHandler,
  postV2ResourceGetIamPolicyRouteHandler,
  postV2ResourceSetIamPolicyRouteHandler,
  postV2ResourceTestIamPermissionsRouteHandler,
  putV2NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV2NameRoute, deleteV2NameRouteHandler)
  .openapi(getV2NameRoute, getV2NameRouteHandler)
  .openapi(patchV2NameRoute, patchV2NameRouteHandler)
  .openapi(putV2NameRoute, putV2NameRouteHandler)
  .openapi(getV2NameLocationsRoute, getV2NameLocationsRouteHandler)
  .openapi(getV2NameOperationsRoute, getV2NameOperationsRouteHandler)
  .openapi(postV2NameCancelRoute, postV2NameCancelRouteHandler)
  .openapi(postV2NameCheckConsistencyRoute, postV2NameCheckConsistencyRouteHandler)
  .openapi(postV2NameDropRowRangeRoute, postV2NameDropRowRangeRouteHandler)
  .openapi(postV2NameGenerateConsistencyTokenRoute, postV2NameGenerateConsistencyTokenRouteHandler)
  .openapi(postV2NameModifyColumnFamiliesRoute, postV2NameModifyColumnFamiliesRouteHandler)
  .openapi(postV2NameUndeleteRoute, postV2NameUndeleteRouteHandler)
  .openapi(getV2ParentAppProfilesRoute, getV2ParentAppProfilesRouteHandler)
  .openapi(postV2ParentAppProfilesRoute, postV2ParentAppProfilesRouteHandler)
  .openapi(getV2ParentBackupsRoute, getV2ParentBackupsRouteHandler)
  .openapi(postV2ParentBackupsRoute, postV2ParentBackupsRouteHandler)
  .openapi(postV2ParentBackupsCopyRoute, postV2ParentBackupsCopyRouteHandler)
  .openapi(getV2ParentClustersRoute, getV2ParentClustersRouteHandler)
  .openapi(postV2ParentClustersRoute, postV2ParentClustersRouteHandler)
  .openapi(getV2ParentHotTabletsRoute, getV2ParentHotTabletsRouteHandler)
  .openapi(getV2ParentInstancesRoute, getV2ParentInstancesRouteHandler)
  .openapi(postV2ParentInstancesRoute, postV2ParentInstancesRouteHandler)
  .openapi(getV2ParentTablesRoute, getV2ParentTablesRouteHandler)
  .openapi(postV2ParentTablesRoute, postV2ParentTablesRouteHandler)
  .openapi(postV2ParentTablesRestoreRoute, postV2ParentTablesRestoreRouteHandler)
  .openapi(postV2ResourceGetIamPolicyRoute, postV2ResourceGetIamPolicyRouteHandler)
  .openapi(postV2ResourceSetIamPolicyRoute, postV2ResourceSetIamPolicyRouteHandler)
  .openapi(postV2ResourceTestIamPermissionsRoute, postV2ResourceTestIamPermissionsRouteHandler)

export default app
