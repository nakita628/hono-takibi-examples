import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSPoseidonServiceV20151101AssociateConfigurationItemsToApplicationHandler,
  XAmzTargetAWSPoseidonServiceV20151101BatchDeleteImportDataHandler,
  XAmzTargetAWSPoseidonServiceV20151101CreateApplicationHandler,
  XAmzTargetAWSPoseidonServiceV20151101CreateTagsHandler,
  XAmzTargetAWSPoseidonServiceV20151101DeleteApplicationsHandler,
  XAmzTargetAWSPoseidonServiceV20151101DeleteTagsHandler,
  XAmzTargetAWSPoseidonServiceV20151101DescribeAgentsHandler,
  XAmzTargetAWSPoseidonServiceV20151101DescribeConfigurationsHandler,
  XAmzTargetAWSPoseidonServiceV20151101DescribeContinuousExportsHandler,
  XAmzTargetAWSPoseidonServiceV20151101DescribeExportConfigurationsHandler,
  XAmzTargetAWSPoseidonServiceV20151101DescribeExportTasksHandler,
  XAmzTargetAWSPoseidonServiceV20151101DescribeImportTasksHandler,
  XAmzTargetAWSPoseidonServiceV20151101DescribeTagsHandler,
  XAmzTargetAWSPoseidonServiceV20151101DisassociateConfigurationItemsFromApplicationHandler,
  XAmzTargetAWSPoseidonServiceV20151101ExportConfigurationsHandler,
  XAmzTargetAWSPoseidonServiceV20151101GetDiscoverySummaryHandler,
  XAmzTargetAWSPoseidonServiceV20151101ListConfigurationsHandler,
  XAmzTargetAWSPoseidonServiceV20151101ListServerNeighborsHandler,
  XAmzTargetAWSPoseidonServiceV20151101StartContinuousExportHandler,
  XAmzTargetAWSPoseidonServiceV20151101StartDataCollectionByAgentIdsHandler,
  XAmzTargetAWSPoseidonServiceV20151101StartExportTaskHandler,
  XAmzTargetAWSPoseidonServiceV20151101StartImportTaskHandler,
  XAmzTargetAWSPoseidonServiceV20151101StopContinuousExportHandler,
  XAmzTargetAWSPoseidonServiceV20151101StopDataCollectionByAgentIdsHandler,
  XAmzTargetAWSPoseidonServiceV20151101UpdateApplicationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSPoseidonServiceV20151101AssociateConfigurationItemsToApplicationHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101BatchDeleteImportDataHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101CreateApplicationHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101CreateTagsHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101DeleteApplicationsHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101DeleteTagsHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101DescribeAgentsHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101DescribeConfigurationsHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101DescribeContinuousExportsHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101DescribeExportConfigurationsHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101DescribeExportTasksHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101DescribeImportTasksHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101DescribeTagsHandler)
  .route(
    '/',
    XAmzTargetAWSPoseidonServiceV20151101DisassociateConfigurationItemsFromApplicationHandler,
  )
  .route('/', XAmzTargetAWSPoseidonServiceV20151101ExportConfigurationsHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101GetDiscoverySummaryHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101ListConfigurationsHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101ListServerNeighborsHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101StartContinuousExportHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101StartDataCollectionByAgentIdsHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101StartExportTaskHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101StartImportTaskHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101StopContinuousExportHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101StopDataCollectionByAgentIdsHandler)
  .route('/', XAmzTargetAWSPoseidonServiceV20151101UpdateApplicationHandler)

export default app
