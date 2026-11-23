import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetCodeBuild20161006BatchDeleteBuildsHandler,
  xAmzTargetCodeBuild20161006BatchGetBuildBatchesHandler,
  xAmzTargetCodeBuild20161006BatchGetBuildsHandler,
  xAmzTargetCodeBuild20161006BatchGetProjectsHandler,
  xAmzTargetCodeBuild20161006BatchGetReportGroupsHandler,
  xAmzTargetCodeBuild20161006BatchGetReportsHandler,
  xAmzTargetCodeBuild20161006CreateProjectHandler,
  xAmzTargetCodeBuild20161006CreateReportGroupHandler,
  xAmzTargetCodeBuild20161006CreateWebhookHandler,
  xAmzTargetCodeBuild20161006DeleteBuildBatchHandler,
  xAmzTargetCodeBuild20161006DeleteProjectHandler,
  xAmzTargetCodeBuild20161006DeleteReportGroupHandler,
  xAmzTargetCodeBuild20161006DeleteReportHandler,
  xAmzTargetCodeBuild20161006DeleteResourcePolicyHandler,
  xAmzTargetCodeBuild20161006DeleteSourceCredentialsHandler,
  xAmzTargetCodeBuild20161006DeleteWebhookHandler,
  xAmzTargetCodeBuild20161006DescribeCodeCoveragesHandler,
  xAmzTargetCodeBuild20161006DescribeTestCasesHandler,
  xAmzTargetCodeBuild20161006GetReportGroupTrendHandler,
  xAmzTargetCodeBuild20161006GetResourcePolicyHandler,
  xAmzTargetCodeBuild20161006ImportSourceCredentialsHandler,
  xAmzTargetCodeBuild20161006InvalidateProjectCacheHandler,
  xAmzTargetCodeBuild20161006ListBuildBatchesForProjectHandler,
  xAmzTargetCodeBuild20161006ListBuildBatchesHandler,
  xAmzTargetCodeBuild20161006ListBuildsForProjectHandler,
  xAmzTargetCodeBuild20161006ListBuildsHandler,
  xAmzTargetCodeBuild20161006ListCuratedEnvironmentImagesHandler,
  xAmzTargetCodeBuild20161006ListProjectsHandler,
  xAmzTargetCodeBuild20161006ListReportGroupsHandler,
  xAmzTargetCodeBuild20161006ListReportsForReportGroupHandler,
  xAmzTargetCodeBuild20161006ListReportsHandler,
  xAmzTargetCodeBuild20161006ListSharedProjectsHandler,
  xAmzTargetCodeBuild20161006ListSharedReportGroupsHandler,
  xAmzTargetCodeBuild20161006ListSourceCredentialsHandler,
  xAmzTargetCodeBuild20161006PutResourcePolicyHandler,
  xAmzTargetCodeBuild20161006RetryBuildBatchHandler,
  xAmzTargetCodeBuild20161006RetryBuildHandler,
  xAmzTargetCodeBuild20161006StartBuildBatchHandler,
  xAmzTargetCodeBuild20161006StartBuildHandler,
  xAmzTargetCodeBuild20161006StopBuildBatchHandler,
  xAmzTargetCodeBuild20161006StopBuildHandler,
  xAmzTargetCodeBuild20161006UpdateProjectHandler,
  xAmzTargetCodeBuild20161006UpdateProjectVisibilityHandler,
  xAmzTargetCodeBuild20161006UpdateReportGroupHandler,
  xAmzTargetCodeBuild20161006UpdateWebhookHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetCodeBuild20161006BatchDeleteBuildsHandler)
  .route('/', xAmzTargetCodeBuild20161006BatchGetBuildBatchesHandler)
  .route('/', xAmzTargetCodeBuild20161006BatchGetBuildsHandler)
  .route('/', xAmzTargetCodeBuild20161006BatchGetProjectsHandler)
  .route('/', xAmzTargetCodeBuild20161006BatchGetReportGroupsHandler)
  .route('/', xAmzTargetCodeBuild20161006BatchGetReportsHandler)
  .route('/', xAmzTargetCodeBuild20161006CreateProjectHandler)
  .route('/', xAmzTargetCodeBuild20161006CreateReportGroupHandler)
  .route('/', xAmzTargetCodeBuild20161006CreateWebhookHandler)
  .route('/', xAmzTargetCodeBuild20161006DeleteBuildBatchHandler)
  .route('/', xAmzTargetCodeBuild20161006DeleteProjectHandler)
  .route('/', xAmzTargetCodeBuild20161006DeleteReportHandler)
  .route('/', xAmzTargetCodeBuild20161006DeleteReportGroupHandler)
  .route('/', xAmzTargetCodeBuild20161006DeleteResourcePolicyHandler)
  .route('/', xAmzTargetCodeBuild20161006DeleteSourceCredentialsHandler)
  .route('/', xAmzTargetCodeBuild20161006DeleteWebhookHandler)
  .route('/', xAmzTargetCodeBuild20161006DescribeCodeCoveragesHandler)
  .route('/', xAmzTargetCodeBuild20161006DescribeTestCasesHandler)
  .route('/', xAmzTargetCodeBuild20161006GetReportGroupTrendHandler)
  .route('/', xAmzTargetCodeBuild20161006GetResourcePolicyHandler)
  .route('/', xAmzTargetCodeBuild20161006ImportSourceCredentialsHandler)
  .route('/', xAmzTargetCodeBuild20161006InvalidateProjectCacheHandler)
  .route('/', xAmzTargetCodeBuild20161006ListBuildBatchesHandler)
  .route('/', xAmzTargetCodeBuild20161006ListBuildBatchesForProjectHandler)
  .route('/', xAmzTargetCodeBuild20161006ListBuildsHandler)
  .route('/', xAmzTargetCodeBuild20161006ListBuildsForProjectHandler)
  .route('/', xAmzTargetCodeBuild20161006ListCuratedEnvironmentImagesHandler)
  .route('/', xAmzTargetCodeBuild20161006ListProjectsHandler)
  .route('/', xAmzTargetCodeBuild20161006ListReportGroupsHandler)
  .route('/', xAmzTargetCodeBuild20161006ListReportsHandler)
  .route('/', xAmzTargetCodeBuild20161006ListReportsForReportGroupHandler)
  .route('/', xAmzTargetCodeBuild20161006ListSharedProjectsHandler)
  .route('/', xAmzTargetCodeBuild20161006ListSharedReportGroupsHandler)
  .route('/', xAmzTargetCodeBuild20161006ListSourceCredentialsHandler)
  .route('/', xAmzTargetCodeBuild20161006PutResourcePolicyHandler)
  .route('/', xAmzTargetCodeBuild20161006RetryBuildHandler)
  .route('/', xAmzTargetCodeBuild20161006RetryBuildBatchHandler)
  .route('/', xAmzTargetCodeBuild20161006StartBuildHandler)
  .route('/', xAmzTargetCodeBuild20161006StartBuildBatchHandler)
  .route('/', xAmzTargetCodeBuild20161006StopBuildHandler)
  .route('/', xAmzTargetCodeBuild20161006StopBuildBatchHandler)
  .route('/', xAmzTargetCodeBuild20161006UpdateProjectHandler)
  .route('/', xAmzTargetCodeBuild20161006UpdateProjectVisibilityHandler)
  .route('/', xAmzTargetCodeBuild20161006UpdateReportGroupHandler)
  .route('/', xAmzTargetCodeBuild20161006UpdateWebhookHandler)

export default app
