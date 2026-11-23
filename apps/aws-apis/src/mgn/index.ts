import { OpenAPIHono } from '@hono/zod-openapi'
import {
  archiveApplicationHandler,
  archiveWaveHandler,
  associateApplicationsHandler,
  associateSourceServersHandler,
  changeServerLifeCycleStateHandler,
  createApplicationHandler,
  createLaunchConfigurationTemplateHandler,
  createReplicationConfigurationTemplateHandler,
  createWaveHandler,
  deleteApplicationHandler,
  deleteJobHandler,
  deleteLaunchConfigurationTemplateHandler,
  deleteReplicationConfigurationTemplateHandler,
  deleteSourceServerHandler,
  deleteVcenterClientHandler,
  deleteWaveHandler,
  describeJobLogItemsHandler,
  describeJobsHandler,
  describeLaunchConfigurationTemplatesHandler,
  describeReplicationConfigurationTemplatesHandler,
  describeSourceServersHandler,
  describeVcenterClientsHandler,
  disassociateApplicationsHandler,
  disassociateSourceServersHandler,
  disconnectFromServiceHandler,
  finalizeCutoverHandler,
  getLaunchConfigurationHandler,
  getReplicationConfigurationHandler,
  initializeServiceHandler,
  listApplicationsHandler,
  listExportErrorsHandler,
  listExportsHandler,
  listImportErrorsHandler,
  listImportsHandler,
  listSourceServerActionsHandler,
  listTemplateActionsHandler,
  listWavesHandler,
  markAsArchivedHandler,
  putSourceServerActionHandler,
  putTemplateActionHandler,
  removeSourceServerActionHandler,
  removeTemplateActionHandler,
  retryDataReplicationHandler,
  startCutoverHandler,
  startExportHandler,
  startImportHandler,
  startReplicationHandler,
  startTestHandler,
  tagsHandler,
  terminateTargetInstancesHandler,
  unarchiveApplicationHandler,
  unarchiveWaveHandler,
  updateApplicationHandler,
  updateLaunchConfigurationHandler,
  updateLaunchConfigurationTemplateHandler,
  updateReplicationConfigurationHandler,
  updateReplicationConfigurationTemplateHandler,
  updateSourceServerReplicationTypeHandler,
  updateWaveHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', archiveApplicationHandler)
  .route('/', archiveWaveHandler)
  .route('/', associateApplicationsHandler)
  .route('/', associateSourceServersHandler)
  .route('/', changeServerLifeCycleStateHandler)
  .route('/', createApplicationHandler)
  .route('/', createLaunchConfigurationTemplateHandler)
  .route('/', createReplicationConfigurationTemplateHandler)
  .route('/', createWaveHandler)
  .route('/', deleteApplicationHandler)
  .route('/', deleteJobHandler)
  .route('/', deleteLaunchConfigurationTemplateHandler)
  .route('/', deleteReplicationConfigurationTemplateHandler)
  .route('/', deleteSourceServerHandler)
  .route('/', deleteVcenterClientHandler)
  .route('/', deleteWaveHandler)
  .route('/', describeJobLogItemsHandler)
  .route('/', describeJobsHandler)
  .route('/', describeLaunchConfigurationTemplatesHandler)
  .route('/', describeReplicationConfigurationTemplatesHandler)
  .route('/', describeSourceServersHandler)
  .route('/', describeVcenterClientsHandler)
  .route('/', disassociateApplicationsHandler)
  .route('/', disassociateSourceServersHandler)
  .route('/', disconnectFromServiceHandler)
  .route('/', finalizeCutoverHandler)
  .route('/', getLaunchConfigurationHandler)
  .route('/', getReplicationConfigurationHandler)
  .route('/', initializeServiceHandler)
  .route('/', listApplicationsHandler)
  .route('/', listExportErrorsHandler)
  .route('/', listExportsHandler)
  .route('/', listImportErrorsHandler)
  .route('/', listImportsHandler)
  .route('/', listSourceServerActionsHandler)
  .route('/', tagsHandler)
  .route('/', listTemplateActionsHandler)
  .route('/', listWavesHandler)
  .route('/', markAsArchivedHandler)
  .route('/', putSourceServerActionHandler)
  .route('/', putTemplateActionHandler)
  .route('/', removeSourceServerActionHandler)
  .route('/', removeTemplateActionHandler)
  .route('/', retryDataReplicationHandler)
  .route('/', startCutoverHandler)
  .route('/', startExportHandler)
  .route('/', startImportHandler)
  .route('/', startReplicationHandler)
  .route('/', startTestHandler)
  .route('/', terminateTargetInstancesHandler)
  .route('/', unarchiveApplicationHandler)
  .route('/', unarchiveWaveHandler)
  .route('/', updateApplicationHandler)
  .route('/', updateLaunchConfigurationHandler)
  .route('/', updateLaunchConfigurationTemplateHandler)
  .route('/', updateReplicationConfigurationHandler)
  .route('/', updateReplicationConfigurationTemplateHandler)
  .route('/', updateSourceServerReplicationTypeHandler)
  .route('/', updateWaveHandler)

export default app
