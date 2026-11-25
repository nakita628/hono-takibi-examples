import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVmmPingRoute,
  putVmmShutdownRoute,
  getVmInfoRoute,
  getVmCountersRoute,
  getVmBalloonStatsRoute,
  putVmCreateRoute,
  putVmDeleteRoute,
  putVmBootRoute,
  putVmPauseRoute,
  putVmResumeRoute,
  putVmShutdownRoute,
  putVmRebootRoute,
  putVmPowerButtonRoute,
  putVmResizeRoute,
  putVmResizeDiskRoute,
  putVmResizeZoneRoute,
  putVmAddDeviceRoute,
  putVmRemoveDeviceRoute,
  putVmAddDiskRoute,
  putVmAddFsRoute,
  putVmAddGenericVhostUserRoute,
  putVmAddPmemRoute,
  putVmAddNetRoute,
  putVmAddVsockRoute,
  putVmAddVdpaRoute,
  putVmAddUserDeviceRoute,
  putVmSnapshotRoute,
  putVmCoredumpRoute,
  putVmNmiRoute,
  putVmRestoreRoute,
  putVmReceiveMigrationRoute,
  putVmSendMigrationRoute,
  putVmCancelMigrationRoute,
} from './routes'
import {
  getVmmPingRouteHandler,
  putVmmShutdownRouteHandler,
  getVmInfoRouteHandler,
  getVmCountersRouteHandler,
  getVmBalloonStatsRouteHandler,
  putVmCreateRouteHandler,
  putVmDeleteRouteHandler,
  putVmBootRouteHandler,
  putVmPauseRouteHandler,
  putVmResumeRouteHandler,
  putVmShutdownRouteHandler,
  putVmRebootRouteHandler,
  putVmPowerButtonRouteHandler,
  putVmResizeRouteHandler,
  putVmResizeDiskRouteHandler,
  putVmResizeZoneRouteHandler,
  putVmAddDeviceRouteHandler,
  putVmRemoveDeviceRouteHandler,
  putVmAddDiskRouteHandler,
  putVmAddFsRouteHandler,
  putVmAddGenericVhostUserRouteHandler,
  putVmAddPmemRouteHandler,
  putVmAddNetRouteHandler,
  putVmAddVsockRouteHandler,
  putVmAddVdpaRouteHandler,
  putVmAddUserDeviceRouteHandler,
  putVmSnapshotRouteHandler,
  putVmCoredumpRouteHandler,
  putVmNmiRouteHandler,
  putVmRestoreRouteHandler,
  putVmReceiveMigrationRouteHandler,
  putVmSendMigrationRouteHandler,
  putVmCancelMigrationRouteHandler,
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
