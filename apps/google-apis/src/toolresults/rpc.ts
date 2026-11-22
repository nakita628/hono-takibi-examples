import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getToolresultsV1beta3ProjectsProjectIdHistories(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories.$get(args, options),
  )
}

export async function postToolresultsV1beta3ProjectsProjectIdHistories(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories.$post(args, options),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryId(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].$get(args, options),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutions(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions.$get(
      args,
      options,
    ),
  )
}

export async function postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutions(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions.$post(
      args,
      options,
    ),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionId(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].$get(args, options),
  )
}

export async function patchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionId(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].$patch(args, options),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClusters(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].clusters.$get(args, options),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterId(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].clusters[':clusterId'].$get(args, options),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironments(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].environments.$get(args, options),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentId(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].environments[':environmentId'].$get(args, options),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdSteps(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].steps.$get(args, options),
  )
}

export async function postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdSteps(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].steps.$post(args, options),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepId(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].steps[':stepId'].$get(args, options),
  )
}

export async function patchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepId(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].steps[':stepId'].$patch(args, options),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummary(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].steps[':stepId'].perfMetricsSummary.$get(args, options),
  )
}

export async function postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummary(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].steps[':stepId'].perfMetricsSummary.$post(args, options),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeries(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].steps[':stepId'].perfSampleSeries.$get(args, options),
  )
}

export async function postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeries(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].steps[':stepId'].perfSampleSeries.$post(args, options),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesId(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].steps[':stepId'].perfSampleSeries[':sampleSeriesId'].$get(args, options),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamples(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].steps[':stepId'].perfSampleSeries[':sampleSeriesId'].samples.$get(args, options),
  )
}

export async function postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesBatchCreate(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples:batchCreate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].steps[':stepId'].perfSampleSeries[':sampleSeriesId']['samples:batchCreate'].$post(
      args,
      options,
    ),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCases(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].steps[':stepId'].testCases.$get(args, options),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseId(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].steps[':stepId'].testCases[':testCaseId'].$get(args, options),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnails(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].steps[':stepId'].thumbnails.$get(args, options),
  )
}

export async function postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPublishXunitXmlFiles(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId:publishXunitXmlFiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
      ':executionId'
    ].steps[':stepId:publishXunitXmlFiles'].$post(args, options),
  )
}

export async function getToolresultsV1beta3ProjectsProjectIdSettings(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId'].settings.$get(args, options),
  )
}

export async function postToolresultsV1beta3ProjectsProjectIdInitializeSettings(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId:initializeSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3.projects[':projectId:initializeSettings'].$post(args, options),
  )
}

export async function getToolresultsV1beta3NameAccessibilityClusters(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.toolresults.v1beta3[':name:accessibilityClusters'].$get(args, options),
  )
}
