import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOptionHandler,
  XAmzTargetKinesisAnalytics20150814AddApplicationInputHandler,
  XAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfigurationHandler,
  XAmzTargetKinesisAnalytics20150814AddApplicationOutputHandler,
  XAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSourceHandler,
  XAmzTargetKinesisAnalytics20150814CreateApplicationHandler,
  XAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOptionHandler,
  XAmzTargetKinesisAnalytics20150814DeleteApplicationHandler,
  XAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfigurationHandler,
  XAmzTargetKinesisAnalytics20150814DeleteApplicationOutputHandler,
  XAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSourceHandler,
  XAmzTargetKinesisAnalytics20150814DescribeApplicationHandler,
  XAmzTargetKinesisAnalytics20150814DiscoverInputSchemaHandler,
  XAmzTargetKinesisAnalytics20150814ListApplicationsHandler,
  XAmzTargetKinesisAnalytics20150814ListTagsForResourceHandler,
  XAmzTargetKinesisAnalytics20150814StartApplicationHandler,
  XAmzTargetKinesisAnalytics20150814StopApplicationHandler,
  XAmzTargetKinesisAnalytics20150814TagResourceHandler,
  XAmzTargetKinesisAnalytics20150814UntagResourceHandler,
  XAmzTargetKinesisAnalytics20150814UpdateApplicationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOptionHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814AddApplicationInputHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfigurationHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814AddApplicationOutputHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSourceHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814CreateApplicationHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814DeleteApplicationHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOptionHandler)
  .route(
    '/',
    XAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfigurationHandler,
  )
  .route('/', XAmzTargetKinesisAnalytics20150814DeleteApplicationOutputHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814DeleteApplicationReferenceDataSourceHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814DescribeApplicationHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814DiscoverInputSchemaHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814ListApplicationsHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814ListTagsForResourceHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814StartApplicationHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814StopApplicationHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814TagResourceHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814UntagResourceHandler)
  .route('/', XAmzTargetKinesisAnalytics20150814UpdateApplicationHandler)

export default app
