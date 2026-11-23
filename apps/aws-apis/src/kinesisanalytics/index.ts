import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOptionHandler,
  xAmzTargetKinesisAnalytics20150814AddApplicationInputHandler,
  xAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfigurationHandler,
  xAmzTargetKinesisAnalytics20150814AddApplicationOutputHandler,
  xAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSourceHandler,
  xAmzTargetKinesisAnalytics20150814CreateApplicationHandler,
  xAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOptionHandler,
  xAmzTargetKinesisAnalytics20150814DeleteApplicationHandler,
  xAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfigurationHandler,
  xAmzTargetKinesisAnalytics20150814DeleteApplicationOutputHandler,
  xAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSourceHandler,
  xAmzTargetKinesisAnalytics20150814DescribeApplicationHandler,
  xAmzTargetKinesisAnalytics20150814DiscoverInputSchemaHandler,
  xAmzTargetKinesisAnalytics20150814ListApplicationsHandler,
  xAmzTargetKinesisAnalytics20150814ListTagsForResourceHandler,
  xAmzTargetKinesisAnalytics20150814StartApplicationHandler,
  xAmzTargetKinesisAnalytics20150814StopApplicationHandler,
  xAmzTargetKinesisAnalytics20150814TagResourceHandler,
  xAmzTargetKinesisAnalytics20150814UntagResourceHandler,
  xAmzTargetKinesisAnalytics20150814UpdateApplicationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOptionHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814AddApplicationInputHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfigurationHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814AddApplicationOutputHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSourceHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814CreateApplicationHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814DeleteApplicationHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOptionHandler)
  .route(
    '/',
    xAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfigurationHandler,
  )
  .route('/', xAmzTargetKinesisAnalytics20150814DeleteApplicationOutputHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSourceHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814DescribeApplicationHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814DiscoverInputSchemaHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814ListApplicationsHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814ListTagsForResourceHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814StartApplicationHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814StopApplicationHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814TagResourceHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814UntagResourceHandler)
  .route('/', xAmzTargetKinesisAnalytics20150814UpdateApplicationHandler)

export default app
