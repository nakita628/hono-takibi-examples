import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetCodeBuild20161006BatchDeleteBuilds(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006BatchGetBuildBatches(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006BatchGetBuilds(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006BatchGetProjects(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetProjects']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.BatchGetProjects'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006BatchGetReportGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006BatchGetReports(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetReports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.BatchGetReports'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006CreateProject(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateProject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.CreateProject'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006CreateReportGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateReportGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.CreateReportGroup'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006CreateWebhook(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateWebhook']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.CreateWebhook'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006DeleteBuildBatch(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006DeleteProject(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteProject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.DeleteProject'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006DeleteReport(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteReport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.DeleteReport'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006DeleteReportGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006DeleteResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006DeleteSourceCredentials(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006DeleteWebhook(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteWebhook']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.DeleteWebhook'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006DescribeCodeCoverages(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006DescribeTestCases(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.DescribeTestCases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.DescribeTestCases'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006GetReportGroupTrend(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006GetResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006ImportSourceCredentials(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006InvalidateProjectCache(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006ListBuildBatches(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildBatches']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.ListBuildBatches'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006ListBuildBatchesForProject(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006ListBuilds(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuilds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.ListBuilds'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006ListBuildsForProject(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006ListCuratedEnvironmentImages(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006ListProjects(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListProjects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.ListProjects'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006ListReportGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReportGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.ListReportGroups'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006ListReports(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.ListReports'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006ListReportsForReportGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006ListSharedProjects(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSharedProjects']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.ListSharedProjects'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006ListSharedReportGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006ListSourceCredentials(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006PutResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006RetryBuild(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.RetryBuild']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.RetryBuild'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006RetryBuildBatch(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006StartBuild(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StartBuild']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.StartBuild'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006StartBuildBatch(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.StartBuildBatch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.StartBuildBatch'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006StopBuild(
  args: InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StopBuild']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.StopBuild'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006StopBuildBatch(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.StopBuildBatch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.StopBuildBatch'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006UpdateProject(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateProject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.UpdateProject'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006UpdateProjectVisibility(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006UpdateReportGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup'].$post(args, options),
  )
}

export async function postXAmzTargetCodeBuild20161006UpdateWebhook(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateWebhook']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodeBuild_20161006.UpdateWebhook'].$post(args, options),
  )
}
