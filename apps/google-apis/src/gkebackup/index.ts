import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameOperationsRoute,
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentBackupPlansRoute,
  getV1ParentBackupsRoute,
  getV1ParentRestorePlansRoute,
  getV1ParentRestoresRoute,
  getV1ParentVolumeBackupsRoute,
  getV1ParentVolumeRestoresRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1ParentBackupPlansRoute,
  postV1ParentBackupsRoute,
  postV1ParentRestorePlansRoute,
  postV1ParentRestoresRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1NameOperationsRouteHandler,
  deleteV1NameRouteHandler,
  getV1NameLocationsRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentBackupPlansRouteHandler,
  getV1ParentBackupsRouteHandler,
  getV1ParentRestorePlansRouteHandler,
  getV1ParentRestoresRouteHandler,
  getV1ParentVolumeBackupsRouteHandler,
  getV1ParentVolumeRestoresRouteHandler,
  getV1ResourceGetIamPolicyRouteHandler,
  patchV1NameRouteHandler,
  postV1NameCancelRouteHandler,
  postV1ParentBackupPlansRouteHandler,
  postV1ParentBackupsRouteHandler,
  postV1ParentRestorePlansRouteHandler,
  postV1ParentRestoresRouteHandler,
  postV1ResourceSetIamPolicyRouteHandler,
  postV1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameLocationsRoute, getV1NameLocationsRouteHandler)
  .openapi(deleteV1NameOperationsRoute, deleteV1NameOperationsRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(getV1ParentBackupPlansRoute, getV1ParentBackupPlansRouteHandler)
  .openapi(postV1ParentBackupPlansRoute, postV1ParentBackupPlansRouteHandler)
  .openapi(getV1ParentBackupsRoute, getV1ParentBackupsRouteHandler)
  .openapi(postV1ParentBackupsRoute, postV1ParentBackupsRouteHandler)
  .openapi(getV1ParentRestorePlansRoute, getV1ParentRestorePlansRouteHandler)
  .openapi(postV1ParentRestorePlansRoute, postV1ParentRestorePlansRouteHandler)
  .openapi(getV1ParentRestoresRoute, getV1ParentRestoresRouteHandler)
  .openapi(postV1ParentRestoresRoute, postV1ParentRestoresRouteHandler)
  .openapi(getV1ParentVolumeBackupsRoute, getV1ParentVolumeBackupsRouteHandler)
  .openapi(getV1ParentVolumeRestoresRoute, getV1ParentVolumeRestoresRouteHandler)
  .openapi(getV1ResourceGetIamPolicyRoute, getV1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1ResourceSetIamPolicyRoute, postV1ResourceSetIamPolicyRouteHandler)
  .openapi(postV1ResourceTestIamPermissionsRoute, postV1ResourceTestIamPermissionsRouteHandler)

export default app
