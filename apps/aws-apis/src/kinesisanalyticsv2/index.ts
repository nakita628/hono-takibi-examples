import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetKinesisAnalytics20180523AddApplicationCloudWatchLoggingOptionHandler,
  XAmzTargetKinesisAnalytics20180523AddApplicationInputHandler,
  XAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfigurationHandler,
  XAmzTargetKinesisAnalytics20180523AddApplicationOutputHandler,
  XAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSourceHandler,
  XAmzTargetKinesisAnalytics20180523AddApplicationVpcConfigurationHandler,
  XAmzTargetKinesisAnalytics20180523CreateApplicationHandler,
  XAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrlHandler,
  XAmzTargetKinesisAnalytics20180523CreateApplicationSnapshotHandler,
  XAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOptionHandler,
  XAmzTargetKinesisAnalytics20180523DeleteApplicationHandler,
  XAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfigurationHandler,
  XAmzTargetKinesisAnalytics20180523DeleteApplicationOutputHandler,
  XAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSourceHandler,
  XAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshotHandler,
  XAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfigurationHandler,
  XAmzTargetKinesisAnalytics20180523DescribeApplicationHandler,
  XAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshotHandler,
  XAmzTargetKinesisAnalytics20180523DescribeApplicationVersionHandler,
  XAmzTargetKinesisAnalytics20180523DiscoverInputSchemaHandler,
  XAmzTargetKinesisAnalytics20180523ListApplicationsHandler,
  XAmzTargetKinesisAnalytics20180523ListApplicationSnapshotsHandler,
  XAmzTargetKinesisAnalytics20180523ListApplicationVersionsHandler,
  XAmzTargetKinesisAnalytics20180523ListTagsForResourceHandler,
  XAmzTargetKinesisAnalytics20180523RollbackApplicationHandler,
  XAmzTargetKinesisAnalytics20180523StartApplicationHandler,
  XAmzTargetKinesisAnalytics20180523StopApplicationHandler,
  XAmzTargetKinesisAnalytics20180523TagResourceHandler,
  XAmzTargetKinesisAnalytics20180523UntagResourceHandler,
  XAmzTargetKinesisAnalytics20180523UpdateApplicationHandler,
  XAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfigurationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetKinesisAnalytics20180523AddApplicationCloudWatchLoggingOptionHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523AddApplicationInputHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfigurationHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523AddApplicationOutputHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSourceHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523AddApplicationVpcConfigurationHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523CreateApplicationHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrlHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523CreateApplicationSnapshotHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523DeleteApplicationHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOptionHandler)
  .route(
    '/',
    XAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfigurationHandler,
  )
  .route('/', XAmzTargetKinesisAnalytics20180523DeleteApplicationOutputHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSourceHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshotHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfigurationHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523DescribeApplicationHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshotHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523DescribeApplicationVersionHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523DiscoverInputSchemaHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523ListApplicationSnapshotsHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523ListApplicationVersionsHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523ListApplicationsHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523ListTagsForResourceHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523RollbackApplicationHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523StartApplicationHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523StopApplicationHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523TagResourceHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523UntagResourceHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523UpdateApplicationHandler)
  .route('/', XAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfigurationHandler)

export default app
