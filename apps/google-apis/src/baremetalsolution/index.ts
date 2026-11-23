import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2LocationInstanceProvisioningSettingsFetchRoute,
  getV2LocationNetworksListNetworkUsageRoute,
  getV2NameLocationsRoute,
  getV2NameRoute,
  getV2ParentInstancesRoute,
  getV2ParentLunsRoute,
  getV2ParentNetworksRoute,
  getV2ParentNfsSharesRoute,
  getV2ParentProvisioningQuotasRoute,
  getV2ParentSnapshotsRoute,
  getV2ParentSshKeysRoute,
  getV2ParentVolumesRoute,
  patchV2NameRoute,
  postV2InstanceDetachLunRoute,
  postV2NameDisableInteractiveSerialConsoleRoute,
  postV2NameEnableInteractiveSerialConsoleRoute,
  postV2NameEvictRoute,
  postV2NameRenameRoute,
  postV2NameResetRoute,
  postV2NameStartRoute,
  postV2NameStopRoute,
  postV2ParentInstancesRoute,
  postV2ParentNfsSharesRoute,
  postV2ParentProvisioningConfigsRoute,
  postV2ParentProvisioningConfigsSubmitRoute,
  postV2ParentSnapshotsRoute,
  postV2ParentSshKeysRoute,
  postV2VolumeResizeRoute,
  postV2VolumeSnapshotRestoreVolumeSnapshotRoute,
} from './routes'
import {
  deleteV2NameRouteHandler,
  getV2LocationInstanceProvisioningSettingsFetchRouteHandler,
  getV2LocationNetworksListNetworkUsageRouteHandler,
  getV2NameLocationsRouteHandler,
  getV2NameRouteHandler,
  getV2ParentInstancesRouteHandler,
  getV2ParentLunsRouteHandler,
  getV2ParentNetworksRouteHandler,
  getV2ParentNfsSharesRouteHandler,
  getV2ParentProvisioningQuotasRouteHandler,
  getV2ParentSnapshotsRouteHandler,
  getV2ParentSshKeysRouteHandler,
  getV2ParentVolumesRouteHandler,
  patchV2NameRouteHandler,
  postV2InstanceDetachLunRouteHandler,
  postV2NameDisableInteractiveSerialConsoleRouteHandler,
  postV2NameEnableInteractiveSerialConsoleRouteHandler,
  postV2NameEvictRouteHandler,
  postV2NameRenameRouteHandler,
  postV2NameResetRouteHandler,
  postV2NameStartRouteHandler,
  postV2NameStopRouteHandler,
  postV2ParentInstancesRouteHandler,
  postV2ParentNfsSharesRouteHandler,
  postV2ParentProvisioningConfigsRouteHandler,
  postV2ParentProvisioningConfigsSubmitRouteHandler,
  postV2ParentSnapshotsRouteHandler,
  postV2ParentSshKeysRouteHandler,
  postV2VolumeResizeRouteHandler,
  postV2VolumeSnapshotRestoreVolumeSnapshotRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2InstanceDetachLunRoute, postV2InstanceDetachLunRouteHandler)
  .openapi(
    getV2LocationInstanceProvisioningSettingsFetchRoute,
    getV2LocationInstanceProvisioningSettingsFetchRouteHandler,
  )
  .openapi(
    getV2LocationNetworksListNetworkUsageRoute,
    getV2LocationNetworksListNetworkUsageRouteHandler,
  )
  .openapi(deleteV2NameRoute, deleteV2NameRouteHandler)
  .openapi(getV2NameRoute, getV2NameRouteHandler)
  .openapi(patchV2NameRoute, patchV2NameRouteHandler)
  .openapi(getV2NameLocationsRoute, getV2NameLocationsRouteHandler)
  .openapi(
    postV2NameDisableInteractiveSerialConsoleRoute,
    postV2NameDisableInteractiveSerialConsoleRouteHandler,
  )
  .openapi(
    postV2NameEnableInteractiveSerialConsoleRoute,
    postV2NameEnableInteractiveSerialConsoleRouteHandler,
  )
  .openapi(postV2NameEvictRoute, postV2NameEvictRouteHandler)
  .openapi(postV2NameRenameRoute, postV2NameRenameRouteHandler)
  .openapi(postV2NameResetRoute, postV2NameResetRouteHandler)
  .openapi(postV2NameStartRoute, postV2NameStartRouteHandler)
  .openapi(postV2NameStopRoute, postV2NameStopRouteHandler)
  .openapi(getV2ParentInstancesRoute, getV2ParentInstancesRouteHandler)
  .openapi(postV2ParentInstancesRoute, postV2ParentInstancesRouteHandler)
  .openapi(getV2ParentLunsRoute, getV2ParentLunsRouteHandler)
  .openapi(getV2ParentNetworksRoute, getV2ParentNetworksRouteHandler)
  .openapi(getV2ParentNfsSharesRoute, getV2ParentNfsSharesRouteHandler)
  .openapi(postV2ParentNfsSharesRoute, postV2ParentNfsSharesRouteHandler)
  .openapi(postV2ParentProvisioningConfigsRoute, postV2ParentProvisioningConfigsRouteHandler)
  .openapi(
    postV2ParentProvisioningConfigsSubmitRoute,
    postV2ParentProvisioningConfigsSubmitRouteHandler,
  )
  .openapi(getV2ParentProvisioningQuotasRoute, getV2ParentProvisioningQuotasRouteHandler)
  .openapi(getV2ParentSnapshotsRoute, getV2ParentSnapshotsRouteHandler)
  .openapi(postV2ParentSnapshotsRoute, postV2ParentSnapshotsRouteHandler)
  .openapi(getV2ParentSshKeysRoute, getV2ParentSshKeysRouteHandler)
  .openapi(postV2ParentSshKeysRoute, postV2ParentSshKeysRouteHandler)
  .openapi(getV2ParentVolumesRoute, getV2ParentVolumesRouteHandler)
  .openapi(
    postV2VolumeSnapshotRestoreVolumeSnapshotRoute,
    postV2VolumeSnapshotRestoreVolumeSnapshotRouteHandler,
  )
  .openapi(postV2VolumeResizeRoute, postV2VolumeResizeRouteHandler)

export default app
