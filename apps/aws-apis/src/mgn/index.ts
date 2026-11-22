import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ArchiveApplicationHandler,
  ArchiveWaveHandler,
  AssociateApplicationsHandler,
  AssociateSourceServersHandler,
  ChangeServerLifeCycleStateHandler,
  CreateApplicationHandler,
  CreateLaunchConfigurationTemplateHandler,
  CreateReplicationConfigurationTemplateHandler,
  CreateWaveHandler,
  DeleteApplicationHandler,
  DeleteJobHandler,
  DeleteLaunchConfigurationTemplateHandler,
  DeleteReplicationConfigurationTemplateHandler,
  DeleteSourceServerHandler,
  DeleteVcenterClientHandler,
  DeleteWaveHandler,
  DescribeJobLogItemsHandler,
  DescribeJobsHandler,
  DescribeLaunchConfigurationTemplatesHandler,
  DescribeReplicationConfigurationTemplatesHandler,
  DescribeSourceServersHandler,
  DescribeVcenterClientsHandler,
  DisassociateApplicationsHandler,
  DisassociateSourceServersHandler,
  DisconnectFromServiceHandler,
  FinalizeCutoverHandler,
  GetLaunchConfigurationHandler,
  GetReplicationConfigurationHandler,
  InitializeServiceHandler,
  ListApplicationsHandler,
  ListExportErrorsHandler,
  ListExportsHandler,
  ListImportErrorsHandler,
  ListImportsHandler,
  ListSourceServerActionsHandler,
  ListTemplateActionsHandler,
  ListWavesHandler,
  MarkAsArchivedHandler,
  PutSourceServerActionHandler,
  PutTemplateActionHandler,
  RemoveSourceServerActionHandler,
  RemoveTemplateActionHandler,
  RetryDataReplicationHandler,
  StartCutoverHandler,
  StartExportHandler,
  StartImportHandler,
  StartReplicationHandler,
  StartTestHandler,
  tagsHandler,
  TerminateTargetInstancesHandler,
  UnarchiveApplicationHandler,
  UnarchiveWaveHandler,
  UpdateApplicationHandler,
  UpdateLaunchConfigurationHandler,
  UpdateLaunchConfigurationTemplateHandler,
  UpdateReplicationConfigurationHandler,
  UpdateReplicationConfigurationTemplateHandler,
  UpdateSourceServerReplicationTypeHandler,
  UpdateWaveHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ArchiveApplicationHandler)
  .route('/', ArchiveWaveHandler)
  .route('/', AssociateApplicationsHandler)
  .route('/', AssociateSourceServersHandler)
  .route('/', ChangeServerLifeCycleStateHandler)
  .route('/', CreateApplicationHandler)
  .route('/', CreateLaunchConfigurationTemplateHandler)
  .route('/', CreateReplicationConfigurationTemplateHandler)
  .route('/', CreateWaveHandler)
  .route('/', DeleteApplicationHandler)
  .route('/', DeleteJobHandler)
  .route('/', DeleteLaunchConfigurationTemplateHandler)
  .route('/', DeleteReplicationConfigurationTemplateHandler)
  .route('/', DeleteSourceServerHandler)
  .route('/', DeleteVcenterClientHandler)
  .route('/', DeleteWaveHandler)
  .route('/', DescribeJobLogItemsHandler)
  .route('/', DescribeJobsHandler)
  .route('/', DescribeLaunchConfigurationTemplatesHandler)
  .route('/', DescribeReplicationConfigurationTemplatesHandler)
  .route('/', DescribeSourceServersHandler)
  .route('/', DescribeVcenterClientsHandler)
  .route('/', DisassociateApplicationsHandler)
  .route('/', DisassociateSourceServersHandler)
  .route('/', DisconnectFromServiceHandler)
  .route('/', FinalizeCutoverHandler)
  .route('/', GetLaunchConfigurationHandler)
  .route('/', GetReplicationConfigurationHandler)
  .route('/', InitializeServiceHandler)
  .route('/', ListApplicationsHandler)
  .route('/', ListExportErrorsHandler)
  .route('/', ListExportsHandler)
  .route('/', ListImportErrorsHandler)
  .route('/', ListImportsHandler)
  .route('/', ListSourceServerActionsHandler)
  .route('/', tagsHandler)
  .route('/', ListTemplateActionsHandler)
  .route('/', ListWavesHandler)
  .route('/', MarkAsArchivedHandler)
  .route('/', PutSourceServerActionHandler)
  .route('/', PutTemplateActionHandler)
  .route('/', RemoveSourceServerActionHandler)
  .route('/', RemoveTemplateActionHandler)
  .route('/', RetryDataReplicationHandler)
  .route('/', StartCutoverHandler)
  .route('/', StartExportHandler)
  .route('/', StartImportHandler)
  .route('/', StartReplicationHandler)
  .route('/', StartTestHandler)
  .route('/', TerminateTargetInstancesHandler)
  .route('/', UnarchiveApplicationHandler)
  .route('/', UnarchiveWaveHandler)
  .route('/', UpdateApplicationHandler)
  .route('/', UpdateLaunchConfigurationHandler)
  .route('/', UpdateLaunchConfigurationTemplateHandler)
  .route('/', UpdateReplicationConfigurationHandler)
  .route('/', UpdateReplicationConfigurationTemplateHandler)
  .route('/', UpdateSourceServerReplicationTypeHandler)
  .route('/', UpdateWaveHandler)

export default app
