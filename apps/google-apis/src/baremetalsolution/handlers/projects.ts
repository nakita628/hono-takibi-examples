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
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV2InstanceDetachLunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationInstanceProvisioningSettingsFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationNetworksListNetworkUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameDisableInteractiveSerialConsoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameEnableInteractiveSerialConsoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameEvictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentLunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentNfsSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentNfsSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentProvisioningConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentProvisioningConfigsSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentProvisioningQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentSshKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentSshKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VolumeSnapshotRestoreVolumeSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VolumeResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
