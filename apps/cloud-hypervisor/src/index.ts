import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVmBalloonStatsRoute,
  getVmCountersRoute,
  getVmInfoRoute,
  getVmmPingRoute,
  putVmAddDeviceRoute,
  putVmAddDiskRoute,
  putVmAddFsRoute,
  putVmAddGenericVhostUserRoute,
  putVmAddNetRoute,
  putVmAddPmemRoute,
  putVmAddUserDeviceRoute,
  putVmAddVdpaRoute,
  putVmAddVsockRoute,
  putVmBootRoute,
  putVmCancelMigrationRoute,
  putVmCoredumpRoute,
  putVmCreateRoute,
  putVmDeleteRoute,
  putVmmShutdownRoute,
  putVmNmiRoute,
  putVmPauseRoute,
  putVmPowerButtonRoute,
  putVmRebootRoute,
  putVmReceiveMigrationRoute,
  putVmRemoveDeviceRoute,
  putVmResizeDiskRoute,
  putVmResizeRoute,
  putVmResizeZoneRoute,
  putVmRestoreRoute,
  putVmResumeRoute,
  putVmSendMigrationRoute,
  putVmShutdownRoute,
  putVmSnapshotRoute,
} from './routes'
import {
  getVmBalloonStatsRouteHandler,
  getVmCountersRouteHandler,
  getVmInfoRouteHandler,
  getVmmPingRouteHandler,
  putVmAddDeviceRouteHandler,
  putVmAddDiskRouteHandler,
  putVmAddFsRouteHandler,
  putVmAddGenericVhostUserRouteHandler,
  putVmAddNetRouteHandler,
  putVmAddPmemRouteHandler,
  putVmAddUserDeviceRouteHandler,
  putVmAddVdpaRouteHandler,
  putVmAddVsockRouteHandler,
  putVmBootRouteHandler,
  putVmCancelMigrationRouteHandler,
  putVmCoredumpRouteHandler,
  putVmCreateRouteHandler,
  putVmDeleteRouteHandler,
  putVmmShutdownRouteHandler,
  putVmNmiRouteHandler,
  putVmPauseRouteHandler,
  putVmPowerButtonRouteHandler,
  putVmRebootRouteHandler,
  putVmReceiveMigrationRouteHandler,
  putVmRemoveDeviceRouteHandler,
  putVmResizeDiskRouteHandler,
  putVmResizeRouteHandler,
  putVmResizeZoneRouteHandler,
  putVmRestoreRouteHandler,
  putVmResumeRouteHandler,
  putVmSendMigrationRouteHandler,
  putVmShutdownRouteHandler,
  putVmSnapshotRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getVmmPingRoute, getVmmPingRouteHandler)
  .openapi(putVmmShutdownRoute, putVmmShutdownRouteHandler)
  .openapi(getVmInfoRoute, getVmInfoRouteHandler)
  .openapi(getVmCountersRoute, getVmCountersRouteHandler)
  .openapi(getVmBalloonStatsRoute, getVmBalloonStatsRouteHandler)
  .openapi(putVmCreateRoute, putVmCreateRouteHandler)
  .openapi(putVmDeleteRoute, putVmDeleteRouteHandler)
  .openapi(putVmBootRoute, putVmBootRouteHandler)
  .openapi(putVmPauseRoute, putVmPauseRouteHandler)
  .openapi(putVmResumeRoute, putVmResumeRouteHandler)
  .openapi(putVmShutdownRoute, putVmShutdownRouteHandler)
  .openapi(putVmRebootRoute, putVmRebootRouteHandler)
  .openapi(putVmPowerButtonRoute, putVmPowerButtonRouteHandler)
  .openapi(putVmResizeRoute, putVmResizeRouteHandler)
  .openapi(putVmResizeDiskRoute, putVmResizeDiskRouteHandler)
  .openapi(putVmResizeZoneRoute, putVmResizeZoneRouteHandler)
  .openapi(putVmAddDeviceRoute, putVmAddDeviceRouteHandler)
  .openapi(putVmRemoveDeviceRoute, putVmRemoveDeviceRouteHandler)
  .openapi(putVmAddDiskRoute, putVmAddDiskRouteHandler)
  .openapi(putVmAddFsRoute, putVmAddFsRouteHandler)
  .openapi(putVmAddGenericVhostUserRoute, putVmAddGenericVhostUserRouteHandler)
  .openapi(putVmAddPmemRoute, putVmAddPmemRouteHandler)
  .openapi(putVmAddNetRoute, putVmAddNetRouteHandler)
  .openapi(putVmAddVsockRoute, putVmAddVsockRouteHandler)
  .openapi(putVmAddVdpaRoute, putVmAddVdpaRouteHandler)
  .openapi(putVmAddUserDeviceRoute, putVmAddUserDeviceRouteHandler)
  .openapi(putVmSnapshotRoute, putVmSnapshotRouteHandler)
  .openapi(putVmCoredumpRoute, putVmCoredumpRouteHandler)
  .openapi(putVmNmiRoute, putVmNmiRouteHandler)
  .openapi(putVmRestoreRoute, putVmRestoreRouteHandler)
  .openapi(putVmReceiveMigrationRoute, putVmReceiveMigrationRouteHandler)
  .openapi(putVmSendMigrationRoute, putVmSendMigrationRouteHandler)
  .openapi(putVmCancelMigrationRoute, putVmCancelMigrationRouteHandler)

export default app
