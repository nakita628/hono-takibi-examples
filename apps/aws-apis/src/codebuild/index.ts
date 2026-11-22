import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetCodeBuild20161006BatchDeleteBuildsHandler,
  XAmzTargetCodeBuild20161006BatchGetBuildBatchesHandler,
  XAmzTargetCodeBuild20161006BatchGetBuildsHandler,
  XAmzTargetCodeBuild20161006BatchGetProjectsHandler,
  XAmzTargetCodeBuild20161006BatchGetReportGroupsHandler,
  XAmzTargetCodeBuild20161006BatchGetReportsHandler,
  XAmzTargetCodeBuild20161006CreateProjectHandler,
  XAmzTargetCodeBuild20161006CreateReportGroupHandler,
  XAmzTargetCodeBuild20161006CreateWebhookHandler,
  XAmzTargetCodeBuild20161006DeleteBuildBatchHandler,
  XAmzTargetCodeBuild20161006DeleteProjectHandler,
  XAmzTargetCodeBuild20161006DeleteReportGroupHandler,
  XAmzTargetCodeBuild20161006DeleteReportHandler,
  XAmzTargetCodeBuild20161006DeleteResourcePolicyHandler,
  XAmzTargetCodeBuild20161006DeleteSourceCredentialsHandler,
  XAmzTargetCodeBuild20161006DeleteWebhookHandler,
  XAmzTargetCodeBuild20161006DescribeCodeCoveragesHandler,
  XAmzTargetCodeBuild20161006DescribeTestCasesHandler,
  XAmzTargetCodeBuild20161006GetReportGroupTrendHandler,
  XAmzTargetCodeBuild20161006GetResourcePolicyHandler,
  XAmzTargetCodeBuild20161006ImportSourceCredentialsHandler,
  XAmzTargetCodeBuild20161006InvalidateProjectCacheHandler,
  XAmzTargetCodeBuild20161006ListBuildBatchesForProjectHandler,
  XAmzTargetCodeBuild20161006ListBuildBatchesHandler,
  XAmzTargetCodeBuild20161006ListBuildsForProjectHandler,
  XAmzTargetCodeBuild20161006ListBuildsHandler,
  XAmzTargetCodeBuild20161006ListCuratedEnvironmentImagesHandler,
  XAmzTargetCodeBuild20161006ListProjectsHandler,
  XAmzTargetCodeBuild20161006ListReportGroupsHandler,
  XAmzTargetCodeBuild20161006ListReportsForReportGroupHandler,
  XAmzTargetCodeBuild20161006ListReportsHandler,
  XAmzTargetCodeBuild20161006ListSharedProjectsHandler,
  XAmzTargetCodeBuild20161006ListSharedReportGroupsHandler,
  XAmzTargetCodeBuild20161006ListSourceCredentialsHandler,
  XAmzTargetCodeBuild20161006PutResourcePolicyHandler,
  XAmzTargetCodeBuild20161006RetryBuildBatchHandler,
  XAmzTargetCodeBuild20161006RetryBuildHandler,
  XAmzTargetCodeBuild20161006StartBuildBatchHandler,
  XAmzTargetCodeBuild20161006StartBuildHandler,
  XAmzTargetCodeBuild20161006StopBuildBatchHandler,
  XAmzTargetCodeBuild20161006StopBuildHandler,
  XAmzTargetCodeBuild20161006UpdateProjectHandler,
  XAmzTargetCodeBuild20161006UpdateProjectVisibilityHandler,
  XAmzTargetCodeBuild20161006UpdateReportGroupHandler,
  XAmzTargetCodeBuild20161006UpdateWebhookHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetCodeBuild20161006BatchDeleteBuildsHandler)
  .route('/', XAmzTargetCodeBuild20161006BatchGetBuildBatchesHandler)
  .route('/', XAmzTargetCodeBuild20161006BatchGetBuildsHandler)
  .route('/', XAmzTargetCodeBuild20161006BatchGetProjectsHandler)
  .route('/', XAmzTargetCodeBuild20161006BatchGetReportGroupsHandler)
  .route('/', XAmzTargetCodeBuild20161006BatchGetReportsHandler)
  .route('/', XAmzTargetCodeBuild20161006CreateProjectHandler)
  .route('/', XAmzTargetCodeBuild20161006CreateReportGroupHandler)
  .route('/', XAmzTargetCodeBuild20161006CreateWebhookHandler)
  .route('/', XAmzTargetCodeBuild20161006DeleteBuildBatchHandler)
  .route('/', XAmzTargetCodeBuild20161006DeleteProjectHandler)
  .route('/', XAmzTargetCodeBuild20161006DeleteReportHandler)
  .route('/', XAmzTargetCodeBuild20161006DeleteReportGroupHandler)
  .route('/', XAmzTargetCodeBuild20161006DeleteResourcePolicyHandler)
  .route('/', XAmzTargetCodeBuild20161006DeleteSourceCredentialsHandler)
  .route('/', XAmzTargetCodeBuild20161006DeleteWebhookHandler)
  .route('/', XAmzTargetCodeBuild20161006DescribeCodeCoveragesHandler)
  .route('/', XAmzTargetCodeBuild20161006DescribeTestCasesHandler)
  .route('/', XAmzTargetCodeBuild20161006GetReportGroupTrendHandler)
  .route('/', XAmzTargetCodeBuild20161006GetResourcePolicyHandler)
  .route('/', XAmzTargetCodeBuild20161006ImportSourceCredentialsHandler)
  .route('/', XAmzTargetCodeBuild20161006InvalidateProjectCacheHandler)
  .route('/', XAmzTargetCodeBuild20161006ListBuildBatchesHandler)
  .route('/', XAmzTargetCodeBuild20161006ListBuildBatchesForProjectHandler)
  .route('/', XAmzTargetCodeBuild20161006ListBuildsHandler)
  .route('/', XAmzTargetCodeBuild20161006ListBuildsForProjectHandler)
  .route('/', XAmzTargetCodeBuild20161006ListCuratedEnvironmentImagesHandler)
  .route('/', XAmzTargetCodeBuild20161006ListProjectsHandler)
  .route('/', XAmzTargetCodeBuild20161006ListReportGroupsHandler)
  .route('/', XAmzTargetCodeBuild20161006ListReportsHandler)
  .route('/', XAmzTargetCodeBuild20161006ListReportsForReportGroupHandler)
  .route('/', XAmzTargetCodeBuild20161006ListSharedProjectsHandler)
  .route('/', XAmzTargetCodeBuild20161006ListSharedReportGroupsHandler)
  .route('/', XAmzTargetCodeBuild20161006ListSourceCredentialsHandler)
  .route('/', XAmzTargetCodeBuild20161006PutResourcePolicyHandler)
  .route('/', XAmzTargetCodeBuild20161006RetryBuildHandler)
  .route('/', XAmzTargetCodeBuild20161006RetryBuildBatchHandler)
  .route('/', XAmzTargetCodeBuild20161006StartBuildHandler)
  .route('/', XAmzTargetCodeBuild20161006StartBuildBatchHandler)
  .route('/', XAmzTargetCodeBuild20161006StopBuildHandler)
  .route('/', XAmzTargetCodeBuild20161006StopBuildBatchHandler)
  .route('/', XAmzTargetCodeBuild20161006UpdateProjectHandler)
  .route('/', XAmzTargetCodeBuild20161006UpdateProjectVisibilityHandler)
  .route('/', XAmzTargetCodeBuild20161006UpdateReportGroupHandler)
  .route('/', XAmzTargetCodeBuild20161006UpdateWebhookHandler)

export default app
