import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppNameMachinesMachineIdLeaseRoute,
  deleteAppsAppNameMachinesMachineIdMetadataKeyRoute,
  deleteAppsAppNameMachinesMachineIdRoute,
  deleteAppsAppNameRoute,
  deleteAppsAppNameVolumesVolumeIdRoute,
  getAppsAppNameMachinesMachineIdEventsRoute,
  getAppsAppNameMachinesMachineIdLeaseRoute,
  getAppsAppNameMachinesMachineIdMetadataRoute,
  getAppsAppNameMachinesMachineIdPsRoute,
  getAppsAppNameMachinesMachineIdRoute,
  getAppsAppNameMachinesMachineIdVersionsRoute,
  getAppsAppNameMachinesMachineIdWaitRoute,
  getAppsAppNameMachinesRoute,
  getAppsAppNameRoute,
  getAppsAppNameVolumesRoute,
  getAppsAppNameVolumesVolumeIdRoute,
  getAppsAppNameVolumesVolumeIdSnapshotsRoute,
  getAppsRoute,
  postAppsAppNameMachinesMachineIdCordonRoute,
  postAppsAppNameMachinesMachineIdExecRoute,
  postAppsAppNameMachinesMachineIdLeaseRoute,
  postAppsAppNameMachinesMachineIdMetadataKeyRoute,
  postAppsAppNameMachinesMachineIdRestartRoute,
  postAppsAppNameMachinesMachineIdRoute,
  postAppsAppNameMachinesMachineIdSignalRoute,
  postAppsAppNameMachinesMachineIdStartRoute,
  postAppsAppNameMachinesMachineIdStopRoute,
  postAppsAppNameMachinesMachineIdUncordonRoute,
  postAppsAppNameMachinesRoute,
  postAppsAppNameVolumesRoute,
  postAppsAppNameVolumesVolumeIdRoute,
  postAppsAppNameVolumesVolumeIdSnapshotsRoute,
  postAppsRoute,
  putAppsAppNameVolumesVolumeIdExtendRoute,
} from './routes'
import {
  deleteAppsAppNameMachinesMachineIdLeaseRouteHandler,
  deleteAppsAppNameMachinesMachineIdMetadataKeyRouteHandler,
  deleteAppsAppNameMachinesMachineIdRouteHandler,
  deleteAppsAppNameRouteHandler,
  deleteAppsAppNameVolumesVolumeIdRouteHandler,
  getAppsAppNameMachinesMachineIdEventsRouteHandler,
  getAppsAppNameMachinesMachineIdLeaseRouteHandler,
  getAppsAppNameMachinesMachineIdMetadataRouteHandler,
  getAppsAppNameMachinesMachineIdPsRouteHandler,
  getAppsAppNameMachinesMachineIdRouteHandler,
  getAppsAppNameMachinesMachineIdVersionsRouteHandler,
  getAppsAppNameMachinesMachineIdWaitRouteHandler,
  getAppsAppNameMachinesRouteHandler,
  getAppsAppNameRouteHandler,
  getAppsAppNameVolumesRouteHandler,
  getAppsAppNameVolumesVolumeIdRouteHandler,
  getAppsAppNameVolumesVolumeIdSnapshotsRouteHandler,
  getAppsRouteHandler,
  postAppsAppNameMachinesMachineIdCordonRouteHandler,
  postAppsAppNameMachinesMachineIdExecRouteHandler,
  postAppsAppNameMachinesMachineIdLeaseRouteHandler,
  postAppsAppNameMachinesMachineIdMetadataKeyRouteHandler,
  postAppsAppNameMachinesMachineIdRestartRouteHandler,
  postAppsAppNameMachinesMachineIdRouteHandler,
  postAppsAppNameMachinesMachineIdSignalRouteHandler,
  postAppsAppNameMachinesMachineIdStartRouteHandler,
  postAppsAppNameMachinesMachineIdStopRouteHandler,
  postAppsAppNameMachinesMachineIdUncordonRouteHandler,
  postAppsAppNameMachinesRouteHandler,
  postAppsAppNameVolumesRouteHandler,
  postAppsAppNameVolumesVolumeIdRouteHandler,
  postAppsAppNameVolumesVolumeIdSnapshotsRouteHandler,
  postAppsRouteHandler,
  putAppsAppNameVolumesVolumeIdExtendRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAppsRoute, getAppsRouteHandler)
  .openapi(postAppsRoute, postAppsRouteHandler)
  .openapi(deleteAppsAppNameRoute, deleteAppsAppNameRouteHandler)
  .openapi(getAppsAppNameRoute, getAppsAppNameRouteHandler)
  .openapi(getAppsAppNameMachinesRoute, getAppsAppNameMachinesRouteHandler)
  .openapi(postAppsAppNameMachinesRoute, postAppsAppNameMachinesRouteHandler)
  .openapi(deleteAppsAppNameMachinesMachineIdRoute, deleteAppsAppNameMachinesMachineIdRouteHandler)
  .openapi(getAppsAppNameMachinesMachineIdRoute, getAppsAppNameMachinesMachineIdRouteHandler)
  .openapi(postAppsAppNameMachinesMachineIdRoute, postAppsAppNameMachinesMachineIdRouteHandler)
  .openapi(
    postAppsAppNameMachinesMachineIdCordonRoute,
    postAppsAppNameMachinesMachineIdCordonRouteHandler,
  )
  .openapi(
    getAppsAppNameMachinesMachineIdEventsRoute,
    getAppsAppNameMachinesMachineIdEventsRouteHandler,
  )
  .openapi(
    postAppsAppNameMachinesMachineIdExecRoute,
    postAppsAppNameMachinesMachineIdExecRouteHandler,
  )
  .openapi(
    deleteAppsAppNameMachinesMachineIdLeaseRoute,
    deleteAppsAppNameMachinesMachineIdLeaseRouteHandler,
  )
  .openapi(
    getAppsAppNameMachinesMachineIdLeaseRoute,
    getAppsAppNameMachinesMachineIdLeaseRouteHandler,
  )
  .openapi(
    postAppsAppNameMachinesMachineIdLeaseRoute,
    postAppsAppNameMachinesMachineIdLeaseRouteHandler,
  )
  .openapi(
    getAppsAppNameMachinesMachineIdMetadataRoute,
    getAppsAppNameMachinesMachineIdMetadataRouteHandler,
  )
  .openapi(
    deleteAppsAppNameMachinesMachineIdMetadataKeyRoute,
    deleteAppsAppNameMachinesMachineIdMetadataKeyRouteHandler,
  )
  .openapi(
    postAppsAppNameMachinesMachineIdMetadataKeyRoute,
    postAppsAppNameMachinesMachineIdMetadataKeyRouteHandler,
  )
  .openapi(getAppsAppNameMachinesMachineIdPsRoute, getAppsAppNameMachinesMachineIdPsRouteHandler)
  .openapi(
    postAppsAppNameMachinesMachineIdRestartRoute,
    postAppsAppNameMachinesMachineIdRestartRouteHandler,
  )
  .openapi(
    postAppsAppNameMachinesMachineIdSignalRoute,
    postAppsAppNameMachinesMachineIdSignalRouteHandler,
  )
  .openapi(
    postAppsAppNameMachinesMachineIdStartRoute,
    postAppsAppNameMachinesMachineIdStartRouteHandler,
  )
  .openapi(
    postAppsAppNameMachinesMachineIdStopRoute,
    postAppsAppNameMachinesMachineIdStopRouteHandler,
  )
  .openapi(
    postAppsAppNameMachinesMachineIdUncordonRoute,
    postAppsAppNameMachinesMachineIdUncordonRouteHandler,
  )
  .openapi(
    getAppsAppNameMachinesMachineIdVersionsRoute,
    getAppsAppNameMachinesMachineIdVersionsRouteHandler,
  )
  .openapi(
    getAppsAppNameMachinesMachineIdWaitRoute,
    getAppsAppNameMachinesMachineIdWaitRouteHandler,
  )
  .openapi(getAppsAppNameVolumesRoute, getAppsAppNameVolumesRouteHandler)
  .openapi(postAppsAppNameVolumesRoute, postAppsAppNameVolumesRouteHandler)
  .openapi(deleteAppsAppNameVolumesVolumeIdRoute, deleteAppsAppNameVolumesVolumeIdRouteHandler)
  .openapi(getAppsAppNameVolumesVolumeIdRoute, getAppsAppNameVolumesVolumeIdRouteHandler)
  .openapi(postAppsAppNameVolumesVolumeIdRoute, postAppsAppNameVolumesVolumeIdRouteHandler)
  .openapi(
    putAppsAppNameVolumesVolumeIdExtendRoute,
    putAppsAppNameVolumesVolumeIdExtendRouteHandler,
  )
  .openapi(
    getAppsAppNameVolumesVolumeIdSnapshotsRoute,
    getAppsAppNameVolumesVolumeIdSnapshotsRouteHandler,
  )
  .openapi(
    postAppsAppNameVolumesVolumeIdSnapshotsRoute,
    postAppsAppNameVolumesVolumeIdSnapshotsRouteHandler,
  )

export default app
