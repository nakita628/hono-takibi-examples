import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMlAnomalyDetectorsJobIdForecastForecastIdRoute,
  deleteMlAnomalyDetectorsJobIdForecastRoute,
  deleteMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRoute,
  deleteMlAnomalyDetectorsJobIdRoute,
  deleteMlCalendarsCalendarIdEventsEventIdRoute,
  deleteMlCalendarsCalendarIdJobsJobIdRoute,
  deleteMlCalendarsCalendarIdRoute,
  deleteMlDatafeedsDatafeedIdRoute,
  deleteMlDataFrameAnalyticsIdRoute,
  deleteMlDeleteExpiredDataJobIdRoute,
  deleteMlDeleteExpiredDataRoute,
  deleteMlFiltersFilterIdRoute,
  deleteMlTrainedModelsModelIdModelAliasesModelAliasRoute,
  deleteMlTrainedModelsModelIdRoute,
  getMlAnomalyDetectorsJobIdModelSnapshotsRoute,
  getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRoute,
  getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeStatsRoute,
  getMlAnomalyDetectorsJobIdResultsBucketsRoute,
  getMlAnomalyDetectorsJobIdResultsBucketsTimestampRoute,
  getMlAnomalyDetectorsJobIdResultsCategoriesCategoryIdRoute,
  getMlAnomalyDetectorsJobIdResultsCategoriesRoute,
  getMlAnomalyDetectorsJobIdResultsInfluencersRoute,
  getMlAnomalyDetectorsJobIdResultsOverallBucketsRoute,
  getMlAnomalyDetectorsJobIdResultsRecordsRoute,
  getMlAnomalyDetectorsJobIdRoute,
  getMlAnomalyDetectorsJobIdStatsRoute,
  getMlAnomalyDetectorsRoute,
  getMlAnomalyDetectorsStatsRoute,
  getMlCalendarsCalendarIdEventsRoute,
  getMlCalendarsCalendarIdRoute,
  getMlCalendarsRoute,
  getMlDatafeedsDatafeedIdPreviewRoute,
  getMlDatafeedsDatafeedIdRoute,
  getMlDatafeedsDatafeedIdStatsRoute,
  getMlDatafeedsPreviewRoute,
  getMlDatafeedsRoute,
  getMlDatafeedsStatsRoute,
  getMlDataFrameAnalyticsExplainRoute,
  getMlDataFrameAnalyticsIdExplainRoute,
  getMlDataFrameAnalyticsIdPreviewRoute,
  getMlDataFrameAnalyticsIdRoute,
  getMlDataFrameAnalyticsIdStatsRoute,
  getMlDataFrameAnalyticsPreviewRoute,
  getMlDataFrameAnalyticsRoute,
  getMlDataFrameAnalyticsStatsRoute,
  getMlFiltersFilterIdRoute,
  getMlFiltersRoute,
  getMlInfoRoute,
  getMlMemoryNodeIdStatsRoute,
  getMlMemoryStatsRoute,
  getMlTrainedModelsModelIdRoute,
  getMlTrainedModelsModelIdStatsRoute,
  getMlTrainedModelsRoute,
  getMlTrainedModelsStatsRoute,
  postMlAnomalyDetectorsEstimateModelMemoryRoute,
  postMlAnomalyDetectorsJobIdCloseRoute,
  postMlAnomalyDetectorsJobIdDataRoute,
  postMlAnomalyDetectorsJobIdFlushRoute,
  postMlAnomalyDetectorsJobIdForecastRoute,
  postMlAnomalyDetectorsJobIdModelSnapshotsRoute,
  postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRevertRoute,
  postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRoute,
  postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpdateRoute,
  postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeRoute,
  postMlAnomalyDetectorsJobIdOpenRoute,
  postMlAnomalyDetectorsJobIdResetRoute,
  postMlAnomalyDetectorsJobIdResultsBucketsRoute,
  postMlAnomalyDetectorsJobIdResultsBucketsTimestampRoute,
  postMlAnomalyDetectorsJobIdResultsCategoriesCategoryIdRoute,
  postMlAnomalyDetectorsJobIdResultsCategoriesRoute,
  postMlAnomalyDetectorsJobIdResultsInfluencersRoute,
  postMlAnomalyDetectorsJobIdResultsOverallBucketsRoute,
  postMlAnomalyDetectorsJobIdResultsRecordsRoute,
  postMlAnomalyDetectorsJobIdUpdateRoute,
  postMlCalendarsCalendarIdEventsRoute,
  postMlCalendarsCalendarIdRoute,
  postMlCalendarsRoute,
  postMlDatafeedsDatafeedIdPreviewRoute,
  postMlDatafeedsDatafeedIdStartRoute,
  postMlDatafeedsDatafeedIdStopRoute,
  postMlDatafeedsDatafeedIdUpdateRoute,
  postMlDatafeedsPreviewRoute,
  postMlDataFrameAnalyticsExplainRoute,
  postMlDataFrameAnalyticsIdExplainRoute,
  postMlDataFrameAnalyticsIdPreviewRoute,
  postMlDataFrameAnalyticsIdStartRoute,
  postMlDataFrameAnalyticsIdStopRoute,
  postMlDataFrameAnalyticsIdUpdateRoute,
  postMlDataFrameAnalyticsPreviewRoute,
  postMlDataFrameEvaluateRoute,
  postMlFiltersFilterIdUpdateRoute,
  postMlSetUpgradeModeRoute,
  postMlTrainedModelsModelIdDeploymentCacheClearRoute,
  postMlTrainedModelsModelIdDeploymentStartRoute,
  postMlTrainedModelsModelIdDeploymentStopRoute,
  postMlTrainedModelsModelIdDeploymentUpdateRoute,
  postMlTrainedModelsModelIdInferRoute,
  putMlAnomalyDetectorsJobIdRoute,
  putMlCalendarsCalendarIdJobsJobIdRoute,
  putMlCalendarsCalendarIdRoute,
  putMlDatafeedsDatafeedIdRoute,
  putMlDataFrameAnalyticsIdRoute,
  putMlFiltersFilterIdRoute,
  putMlTrainedModelsModelIdDefinitionPartRoute,
  putMlTrainedModelsModelIdModelAliasesModelAliasRoute,
  putMlTrainedModelsModelIdRoute,
  putMlTrainedModelsModelIdVocabularyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mlHandler = app
  .openapi(postMlTrainedModelsModelIdDeploymentCacheClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMlCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMlCalendarsCalendarIdJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlCalendarsCalendarIdJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDataFrameAnalyticsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMlDataFrameAnalyticsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlDataFrameAnalyticsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDatafeedsDatafeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMlDatafeedsDatafeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlDatafeedsDatafeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlDeleteExpiredDataJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlDeleteExpiredDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMlFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdForecastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlAnomalyDetectorsJobIdForecastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlAnomalyDetectorsJobIdForecastForecastIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlAnomalyDetectorsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMlAnomalyDetectorsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlAnomalyDetectorsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlTrainedModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMlTrainedModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlTrainedModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMlTrainedModelsModelIdModelAliasesModelAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlTrainedModelsModelIdModelAliasesModelAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsEstimateModelMemoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDataFrameEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDataFrameAnalyticsExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDataFrameAnalyticsExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDataFrameAnalyticsIdExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDataFrameAnalyticsIdExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdFlushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlAnomalyDetectorsJobIdResultsBucketsTimestampRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdResultsBucketsTimestampRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlAnomalyDetectorsJobIdResultsBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdResultsBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlAnomalyDetectorsJobIdResultsCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdResultsCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlAnomalyDetectorsJobIdResultsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdResultsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDataFrameAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDataFrameAnalyticsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDataFrameAnalyticsIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDatafeedsDatafeedIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDatafeedsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDatafeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlAnomalyDetectorsJobIdResultsInfluencersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdResultsInfluencersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlAnomalyDetectorsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlAnomalyDetectorsJobIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlAnomalyDetectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlMemoryStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlMemoryNodeIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlAnomalyDetectorsJobIdModelSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdModelSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlAnomalyDetectorsJobIdResultsOverallBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdResultsOverallBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlAnomalyDetectorsJobIdResultsRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdResultsRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlTrainedModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlTrainedModelsModelIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlTrainedModelsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlTrainedModelsModelIdInferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDataFrameAnalyticsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDataFrameAnalyticsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDataFrameAnalyticsIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDataFrameAnalyticsIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDatafeedsDatafeedIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDatafeedsDatafeedIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDatafeedsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDatafeedsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMlTrainedModelsModelIdDefinitionPartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMlTrainedModelsModelIdVocabularyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlSetUpgradeModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDataFrameAnalyticsIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDatafeedsDatafeedIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlTrainedModelsModelIdDeploymentStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDataFrameAnalyticsIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDatafeedsDatafeedIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlTrainedModelsModelIdDeploymentStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDataFrameAnalyticsIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDatafeedsDatafeedIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlFiltersFilterIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlTrainedModelsModelIdDeploymentUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
