import { OpenAPIHono } from '@hono/zod-openapi'
import {
  vmAddDeviceHandler,
  vmAddDiskHandler,
  vmAddFsHandler,
  vmAddGenericVhostUserHandler,
  vmAddNetHandler,
  vmAddPmemHandler,
  vmAddUserDeviceHandler,
  vmAddVdpaHandler,
  vmAddVsockHandler,
  vmBalloonStatsHandler,
  vmBootHandler,
  vmCancelMigrationHandler,
  vmCoredumpHandler,
  vmCountersHandler,
  vmCreateHandler,
  vmDeleteHandler,
  vmInfoHandler,
  vmmPingHandler,
  vmmShutdownHandler,
  vmNmiHandler,
  vmPauseHandler,
  vmPowerButtonHandler,
  vmRebootHandler,
  vmReceiveMigrationHandler,
  vmRemoveDeviceHandler,
  vmResizeDiskHandler,
  vmResizeHandler,
  vmResizeZoneHandler,
  vmRestoreHandler,
  vmResumeHandler,
  vmSendMigrationHandler,
  vmShutdownHandler,
  vmSnapshotHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', vmmPingHandler)
  .route('/', vmmShutdownHandler)
  .route('/', vmInfoHandler)
  .route('/', vmCountersHandler)
  .route('/', vmBalloonStatsHandler)
  .route('/', vmCreateHandler)
  .route('/', vmDeleteHandler)
  .route('/', vmBootHandler)
  .route('/', vmPauseHandler)
  .route('/', vmResumeHandler)
  .route('/', vmShutdownHandler)
  .route('/', vmRebootHandler)
  .route('/', vmPowerButtonHandler)
  .route('/', vmResizeHandler)
  .route('/', vmResizeDiskHandler)
  .route('/', vmResizeZoneHandler)
  .route('/', vmAddDeviceHandler)
  .route('/', vmRemoveDeviceHandler)
  .route('/', vmAddDiskHandler)
  .route('/', vmAddFsHandler)
  .route('/', vmAddGenericVhostUserHandler)
  .route('/', vmAddPmemHandler)
  .route('/', vmAddNetHandler)
  .route('/', vmAddVsockHandler)
  .route('/', vmAddVdpaHandler)
  .route('/', vmAddUserDeviceHandler)
  .route('/', vmSnapshotHandler)
  .route('/', vmCoredumpHandler)
  .route('/', vmNmiHandler)
  .route('/', vmRestoreHandler)
  .route('/', vmReceiveMigrationHandler)
  .route('/', vmSendMigrationHandler)
  .route('/', vmCancelMigrationHandler)

export default app
