import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ExperimentsBanditsBanditIdRoute,
  deleteApiV2ExperimentsExperimentIdMetricGroupsMetricGroupIdRoute,
  deleteApiV2ExperimentsExperimentIdRoute,
  deleteApiV2ExperimentsMetricCollectionsMetricCollectionIdRoute,
  deleteApiV2ExperimentsMetricsMetricIdRoute,
  deleteApiV2ExperimentsProtocolsProtocolIdRoute,
  deleteApiV2ExperimentsSubjectTypesSubjectTypeIdRoute,
  getApiV2ExperimentsBanditsBanditIdPoliciesRoute,
  getApiV2ExperimentsBanditsBanditIdResultsRoute,
  getApiV2ExperimentsBanditsBanditIdRoute,
  getApiV2ExperimentsBanditsBanditIdTrafficSummaryRoute,
  getApiV2ExperimentsBanditsRoute,
  getApiV2ExperimentsExperimentIdAnalysisPlanRoute,
  getApiV2ExperimentsExperimentIdDiagnosticsRoute,
  getApiV2ExperimentsExperimentIdHoldoutsRoute,
  getApiV2ExperimentsExperimentIdMetricGroupsRoute,
  getApiV2ExperimentsExperimentIdResultsRoute,
  getApiV2ExperimentsExperimentIdRoute,
  getApiV2ExperimentsExperimentIdTrafficSummaryRoute,
  getApiV2ExperimentsExposureSqlModelsExposureSqlModelIdRoute,
  getApiV2ExperimentsExposureSqlModelsRoute,
  getApiV2ExperimentsMetricCollectionsMetricCollectionIdRoute,
  getApiV2ExperimentsMetricCollectionsRoute,
  getApiV2ExperimentsMetricsMetricIdRoute,
  getApiV2ExperimentsMetricSqlModelsMetricSqlModelIdRoute,
  getApiV2ExperimentsMetricSqlModelsRoute,
  getApiV2ExperimentsMetricsRoute,
  getApiV2ExperimentsProtocolsProtocolIdRoute,
  getApiV2ExperimentsProtocolsRoute,
  getApiV2ExperimentsRoute,
  getApiV2ExperimentsSubjectTypesRoute,
  getApiV2ExperimentsSubjectTypesSubjectTypeIdRoute,
  patchApiV2ExperimentsBanditsBanditIdRoute,
  patchApiV2ExperimentsExperimentIdAnalysisPlanRoute,
  patchApiV2ExperimentsExperimentIdMetricGroupsMetricGroupIdRoute,
  patchApiV2ExperimentsExperimentIdRoute,
  patchApiV2ExperimentsMetricCollectionsMetricCollectionIdRoute,
  patchApiV2ExperimentsMetricsMetricIdRoute,
  patchApiV2ExperimentsProtocolsProtocolIdRoute,
  patchApiV2ExperimentsSubjectTypesSubjectTypeIdRoute,
  postApiV2ExperimentsBanditsBanditIdPauseRoute,
  postApiV2ExperimentsBanditsBanditIdRefreshRoute,
  postApiV2ExperimentsBanditsBanditIdResumeRoute,
  postApiV2ExperimentsBanditsBanditIdStartRoute,
  postApiV2ExperimentsBanditsBanditIdStopRoute,
  postApiV2ExperimentsBanditsRoute,
  postApiV2ExperimentsExperimentIdCancelRoute,
  postApiV2ExperimentsExperimentIdConcludeRoute,
  postApiV2ExperimentsExperimentIdMetricGroupsFromCollectionMetricCollectionIdRoute,
  postApiV2ExperimentsExperimentIdMetricGroupsRoute,
  postApiV2ExperimentsExperimentIdResultsRefreshRoute,
  postApiV2ExperimentsExperimentIdStartRoute,
  postApiV2ExperimentsExposureSqlModelsExposureSqlModelIdArchiveRoute,
  postApiV2ExperimentsExposureSqlModelsExposureSqlModelIdUnarchiveRoute,
  postApiV2ExperimentsExposureSqlModelsRoute,
  postApiV2ExperimentsMetricCollectionsRoute,
  postApiV2ExperimentsMetricSqlModelsRoute,
  postApiV2ExperimentsMetricsRoute,
  postApiV2ExperimentsProtocolsProtocolIdArchiveRoute,
  postApiV2ExperimentsProtocolsProtocolIdPublishRoute,
  postApiV2ExperimentsProtocolsRoute,
  postApiV2ExperimentsResultsRefreshRoute,
  postApiV2ExperimentsRoute,
  postApiV2ExperimentsSubjectTypesRoute,
  postApiV2ExperimentsSubjectTypesSubjectTypeIdDefaultRoute,
  putApiV2ExperimentsExposureSqlModelsExposureSqlModelIdRoute,
  putApiV2ExperimentsMetricSqlModelsMetricSqlModelIdRoute,
  putApiV2ExperimentsProtocolsProtocolIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const experimentsHandler = app
  .openapi(getApiV2ExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsBanditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsBanditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ExperimentsBanditsBanditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsBanditsBanditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ExperimentsBanditsBanditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsBanditsBanditIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsBanditsBanditIdPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsBanditsBanditIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsBanditsBanditIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsBanditsBanditIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsBanditsBanditIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsBanditsBanditIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsBanditsBanditIdTrafficSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsExposureSqlModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsExposureSqlModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsExposureSqlModelsExposureSqlModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ExperimentsExposureSqlModelsExposureSqlModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsExposureSqlModelsExposureSqlModelIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsExposureSqlModelsExposureSqlModelIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsMetricCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsMetricCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ExperimentsMetricCollectionsMetricCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsMetricCollectionsMetricCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ExperimentsMetricCollectionsMetricCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsMetricSqlModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsMetricSqlModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsMetricSqlModelsMetricSqlModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ExperimentsMetricSqlModelsMetricSqlModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ExperimentsMetricsMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsMetricsMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ExperimentsMetricsMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsProtocolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsProtocolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ExperimentsProtocolsProtocolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsProtocolsProtocolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ExperimentsProtocolsProtocolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ExperimentsProtocolsProtocolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsProtocolsProtocolIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsProtocolsProtocolIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsResultsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsSubjectTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsSubjectTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ExperimentsSubjectTypesSubjectTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsSubjectTypesSubjectTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ExperimentsSubjectTypesSubjectTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsSubjectTypesSubjectTypeIdDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ExperimentsExperimentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsExperimentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ExperimentsExperimentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsExperimentIdAnalysisPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ExperimentsExperimentIdAnalysisPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsExperimentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsExperimentIdConcludeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsExperimentIdDiagnosticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsExperimentIdHoldoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsExperimentIdMetricGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsExperimentIdMetricGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV2ExperimentsExperimentIdMetricGroupsFromCollectionMetricCollectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteApiV2ExperimentsExperimentIdMetricGroupsMetricGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ExperimentsExperimentIdMetricGroupsMetricGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsExperimentIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsExperimentIdResultsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ExperimentsExperimentIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ExperimentsExperimentIdTrafficSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
