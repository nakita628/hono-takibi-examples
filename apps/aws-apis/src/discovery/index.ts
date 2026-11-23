import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsPoseidonServiceV20151101AssociateConfigurationItemsToApplicationHandler,
  xAmzTargetAwsPoseidonServiceV20151101BatchDeleteImportDataHandler,
  xAmzTargetAwsPoseidonServiceV20151101CreateApplicationHandler,
  xAmzTargetAwsPoseidonServiceV20151101CreateTagsHandler,
  xAmzTargetAwsPoseidonServiceV20151101DeleteApplicationsHandler,
  xAmzTargetAwsPoseidonServiceV20151101DeleteTagsHandler,
  xAmzTargetAwsPoseidonServiceV20151101DescribeAgentsHandler,
  xAmzTargetAwsPoseidonServiceV20151101DescribeConfigurationsHandler,
  xAmzTargetAwsPoseidonServiceV20151101DescribeContinuousExportsHandler,
  xAmzTargetAwsPoseidonServiceV20151101DescribeExportConfigurationsHandler,
  xAmzTargetAwsPoseidonServiceV20151101DescribeExportTasksHandler,
  xAmzTargetAwsPoseidonServiceV20151101DescribeImportTasksHandler,
  xAmzTargetAwsPoseidonServiceV20151101DescribeTagsHandler,
  xAmzTargetAwsPoseidonServiceV20151101DisassociateConfigurationItemsFromApplicationHandler,
  xAmzTargetAwsPoseidonServiceV20151101ExportConfigurationsHandler,
  xAmzTargetAwsPoseidonServiceV20151101GetDiscoverySummaryHandler,
  xAmzTargetAwsPoseidonServiceV20151101ListConfigurationsHandler,
  xAmzTargetAwsPoseidonServiceV20151101ListServerNeighborsHandler,
  xAmzTargetAwsPoseidonServiceV20151101StartContinuousExportHandler,
  xAmzTargetAwsPoseidonServiceV20151101StartDataCollectionByAgentIdsHandler,
  xAmzTargetAwsPoseidonServiceV20151101StartExportTaskHandler,
  xAmzTargetAwsPoseidonServiceV20151101StartImportTaskHandler,
  xAmzTargetAwsPoseidonServiceV20151101StopContinuousExportHandler,
  xAmzTargetAwsPoseidonServiceV20151101StopDataCollectionByAgentIdsHandler,
  xAmzTargetAwsPoseidonServiceV20151101UpdateApplicationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsPoseidonServiceV20151101AssociateConfigurationItemsToApplicationHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101BatchDeleteImportDataHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101CreateApplicationHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101CreateTagsHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101DeleteApplicationsHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101DeleteTagsHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101DescribeAgentsHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101DescribeConfigurationsHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101DescribeContinuousExportsHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101DescribeExportConfigurationsHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101DescribeExportTasksHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101DescribeImportTasksHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101DescribeTagsHandler)
  .route(
    '/',
    xAmzTargetAwsPoseidonServiceV20151101DisassociateConfigurationItemsFromApplicationHandler,
  )
  .route('/', xAmzTargetAwsPoseidonServiceV20151101ExportConfigurationsHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101GetDiscoverySummaryHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101ListConfigurationsHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101ListServerNeighborsHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101StartContinuousExportHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101StartDataCollectionByAgentIdsHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101StartExportTaskHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101StartImportTaskHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101StopContinuousExportHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101StopDataCollectionByAgentIdsHandler)
  .route('/', xAmzTargetAwsPoseidonServiceV20151101UpdateApplicationHandler)

export default app
