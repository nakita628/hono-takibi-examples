import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetKinesisAnalytics20180523AddApplicationCloudWatchLoggingOptionHandler,
  xAmzTargetKinesisAnalytics20180523AddApplicationInputHandler,
  xAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfigurationHandler,
  xAmzTargetKinesisAnalytics20180523AddApplicationOutputHandler,
  xAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSourceHandler,
  xAmzTargetKinesisAnalytics20180523AddApplicationVpcConfigurationHandler,
  xAmzTargetKinesisAnalytics20180523CreateApplicationHandler,
  xAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrlHandler,
  xAmzTargetKinesisAnalytics20180523CreateApplicationSnapshotHandler,
  xAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOptionHandler,
  xAmzTargetKinesisAnalytics20180523DeleteApplicationHandler,
  xAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfigurationHandler,
  xAmzTargetKinesisAnalytics20180523DeleteApplicationOutputHandler,
  xAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSourceHandler,
  xAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshotHandler,
  xAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfigurationHandler,
  xAmzTargetKinesisAnalytics20180523DescribeApplicationHandler,
  xAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshotHandler,
  xAmzTargetKinesisAnalytics20180523DescribeApplicationVersionHandler,
  xAmzTargetKinesisAnalytics20180523DiscoverInputSchemaHandler,
  xAmzTargetKinesisAnalytics20180523ListApplicationsHandler,
  xAmzTargetKinesisAnalytics20180523ListApplicationSnapshotsHandler,
  xAmzTargetKinesisAnalytics20180523ListApplicationVersionsHandler,
  xAmzTargetKinesisAnalytics20180523ListTagsForResourceHandler,
  xAmzTargetKinesisAnalytics20180523RollbackApplicationHandler,
  xAmzTargetKinesisAnalytics20180523StartApplicationHandler,
  xAmzTargetKinesisAnalytics20180523StopApplicationHandler,
  xAmzTargetKinesisAnalytics20180523TagResourceHandler,
  xAmzTargetKinesisAnalytics20180523UntagResourceHandler,
  xAmzTargetKinesisAnalytics20180523UpdateApplicationHandler,
  xAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfigurationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetKinesisAnalytics20180523AddApplicationCloudWatchLoggingOptionHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523AddApplicationInputHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfigurationHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523AddApplicationOutputHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSourceHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523AddApplicationVpcConfigurationHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523CreateApplicationHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrlHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523CreateApplicationSnapshotHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523DeleteApplicationHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOptionHandler)
  .route(
    '/',
    xAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfigurationHandler,
  )
  .route('/', xAmzTargetKinesisAnalytics20180523DeleteApplicationOutputHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523DeleteApplicationReferenceDataSourceHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshotHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfigurationHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523DescribeApplicationHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523DescribeApplicationSnapshotHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523DescribeApplicationVersionHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523DiscoverInputSchemaHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523ListApplicationSnapshotsHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523ListApplicationVersionsHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523ListApplicationsHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523ListTagsForResourceHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523RollbackApplicationHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523StartApplicationHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523StopApplicationHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523TagResourceHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523UntagResourceHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523UpdateApplicationHandler)
  .route('/', xAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfigurationHandler)

export default app
