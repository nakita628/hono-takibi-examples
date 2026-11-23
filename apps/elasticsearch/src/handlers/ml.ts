import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const postMlTrainedModelsModelIdDeploymentCacheClearRouteHandler: RouteHandler<
  typeof postMlTrainedModelsModelIdDeploymentCacheClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdCloseRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlCalendarsCalendarIdRouteHandler: RouteHandler<
  typeof getMlCalendarsCalendarIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMlCalendarsCalendarIdRouteHandler: RouteHandler<
  typeof putMlCalendarsCalendarIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlCalendarsCalendarIdRouteHandler: RouteHandler<
  typeof postMlCalendarsCalendarIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMlCalendarsCalendarIdRouteHandler: RouteHandler<
  typeof deleteMlCalendarsCalendarIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMlCalendarsCalendarIdEventsEventIdRouteHandler: RouteHandler<
  typeof deleteMlCalendarsCalendarIdEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMlCalendarsCalendarIdJobsJobIdRouteHandler: RouteHandler<
  typeof putMlCalendarsCalendarIdJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMlCalendarsCalendarIdJobsJobIdRouteHandler: RouteHandler<
  typeof deleteMlCalendarsCalendarIdJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlDataFrameAnalyticsIdRouteHandler: RouteHandler<
  typeof getMlDataFrameAnalyticsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMlDataFrameAnalyticsIdRouteHandler: RouteHandler<
  typeof putMlDataFrameAnalyticsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMlDataFrameAnalyticsIdRouteHandler: RouteHandler<
  typeof deleteMlDataFrameAnalyticsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlDatafeedsDatafeedIdRouteHandler: RouteHandler<
  typeof getMlDatafeedsDatafeedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMlDatafeedsDatafeedIdRouteHandler: RouteHandler<
  typeof putMlDatafeedsDatafeedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMlDatafeedsDatafeedIdRouteHandler: RouteHandler<
  typeof deleteMlDatafeedsDatafeedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMlDeleteExpiredDataJobIdRouteHandler: RouteHandler<
  typeof deleteMlDeleteExpiredDataJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMlDeleteExpiredDataRouteHandler: RouteHandler<
  typeof deleteMlDeleteExpiredDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlFiltersFilterIdRouteHandler: RouteHandler<
  typeof getMlFiltersFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMlFiltersFilterIdRouteHandler: RouteHandler<
  typeof putMlFiltersFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMlFiltersFilterIdRouteHandler: RouteHandler<
  typeof deleteMlFiltersFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdForecastRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdForecastRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMlAnomalyDetectorsJobIdForecastRouteHandler: RouteHandler<
  typeof deleteMlAnomalyDetectorsJobIdForecastRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMlAnomalyDetectorsJobIdForecastForecastIdRouteHandler: RouteHandler<
  typeof deleteMlAnomalyDetectorsJobIdForecastForecastIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlAnomalyDetectorsJobIdRouteHandler: RouteHandler<
  typeof getMlAnomalyDetectorsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMlAnomalyDetectorsJobIdRouteHandler: RouteHandler<
  typeof putMlAnomalyDetectorsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMlAnomalyDetectorsJobIdRouteHandler: RouteHandler<
  typeof deleteMlAnomalyDetectorsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRouteHandler: RouteHandler<
  typeof getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRouteHandler: RouteHandler<
  typeof deleteMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlTrainedModelsModelIdRouteHandler: RouteHandler<
  typeof getMlTrainedModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMlTrainedModelsModelIdRouteHandler: RouteHandler<
  typeof putMlTrainedModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMlTrainedModelsModelIdRouteHandler: RouteHandler<
  typeof deleteMlTrainedModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMlTrainedModelsModelIdModelAliasesModelAliasRouteHandler: RouteHandler<
  typeof putMlTrainedModelsModelIdModelAliasesModelAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMlTrainedModelsModelIdModelAliasesModelAliasRouteHandler: RouteHandler<
  typeof deleteMlTrainedModelsModelIdModelAliasesModelAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsEstimateModelMemoryRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsEstimateModelMemoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlDataFrameEvaluateRouteHandler: RouteHandler<
  typeof postMlDataFrameEvaluateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlDataFrameAnalyticsExplainRouteHandler: RouteHandler<
  typeof getMlDataFrameAnalyticsExplainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlDataFrameAnalyticsExplainRouteHandler: RouteHandler<
  typeof postMlDataFrameAnalyticsExplainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlDataFrameAnalyticsIdExplainRouteHandler: RouteHandler<
  typeof getMlDataFrameAnalyticsIdExplainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlDataFrameAnalyticsIdExplainRouteHandler: RouteHandler<
  typeof postMlDataFrameAnalyticsIdExplainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdFlushRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdFlushRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlAnomalyDetectorsJobIdResultsBucketsTimestampRouteHandler: RouteHandler<
  typeof getMlAnomalyDetectorsJobIdResultsBucketsTimestampRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdResultsBucketsTimestampRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdResultsBucketsTimestampRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlAnomalyDetectorsJobIdResultsBucketsRouteHandler: RouteHandler<
  typeof getMlAnomalyDetectorsJobIdResultsBucketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdResultsBucketsRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdResultsBucketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlCalendarsCalendarIdEventsRouteHandler: RouteHandler<
  typeof getMlCalendarsCalendarIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlCalendarsCalendarIdEventsRouteHandler: RouteHandler<
  typeof postMlCalendarsCalendarIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlCalendarsRouteHandler: RouteHandler<typeof getMlCalendarsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlCalendarsRouteHandler: RouteHandler<typeof postMlCalendarsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlAnomalyDetectorsJobIdResultsCategoriesCategoryIdRouteHandler: RouteHandler<
  typeof getMlAnomalyDetectorsJobIdResultsCategoriesCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdResultsCategoriesCategoryIdRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdResultsCategoriesCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlAnomalyDetectorsJobIdResultsCategoriesRouteHandler: RouteHandler<
  typeof getMlAnomalyDetectorsJobIdResultsCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdResultsCategoriesRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdResultsCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlDataFrameAnalyticsRouteHandler: RouteHandler<
  typeof getMlDataFrameAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlDataFrameAnalyticsStatsRouteHandler: RouteHandler<
  typeof getMlDataFrameAnalyticsStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlDataFrameAnalyticsIdStatsRouteHandler: RouteHandler<
  typeof getMlDataFrameAnalyticsIdStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlDatafeedsDatafeedIdStatsRouteHandler: RouteHandler<
  typeof getMlDatafeedsDatafeedIdStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlDatafeedsStatsRouteHandler: RouteHandler<
  typeof getMlDatafeedsStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlDatafeedsRouteHandler: RouteHandler<typeof getMlDatafeedsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlFiltersRouteHandler: RouteHandler<typeof getMlFiltersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlAnomalyDetectorsJobIdResultsInfluencersRouteHandler: RouteHandler<
  typeof getMlAnomalyDetectorsJobIdResultsInfluencersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdResultsInfluencersRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdResultsInfluencersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlAnomalyDetectorsStatsRouteHandler: RouteHandler<
  typeof getMlAnomalyDetectorsStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlAnomalyDetectorsJobIdStatsRouteHandler: RouteHandler<
  typeof getMlAnomalyDetectorsJobIdStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlAnomalyDetectorsRouteHandler: RouteHandler<
  typeof getMlAnomalyDetectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlMemoryStatsRouteHandler: RouteHandler<typeof getMlMemoryStatsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMlMemoryNodeIdStatsRouteHandler: RouteHandler<
  typeof getMlMemoryNodeIdStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeStatsRouteHandler: RouteHandler<
  typeof getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlAnomalyDetectorsJobIdModelSnapshotsRouteHandler: RouteHandler<
  typeof getMlAnomalyDetectorsJobIdModelSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdModelSnapshotsRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdModelSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlAnomalyDetectorsJobIdResultsOverallBucketsRouteHandler: RouteHandler<
  typeof getMlAnomalyDetectorsJobIdResultsOverallBucketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdResultsOverallBucketsRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdResultsOverallBucketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlAnomalyDetectorsJobIdResultsRecordsRouteHandler: RouteHandler<
  typeof getMlAnomalyDetectorsJobIdResultsRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdResultsRecordsRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdResultsRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlTrainedModelsRouteHandler: RouteHandler<typeof getMlTrainedModelsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMlTrainedModelsModelIdStatsRouteHandler: RouteHandler<
  typeof getMlTrainedModelsModelIdStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlTrainedModelsStatsRouteHandler: RouteHandler<
  typeof getMlTrainedModelsStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlTrainedModelsModelIdInferRouteHandler: RouteHandler<
  typeof postMlTrainedModelsModelIdInferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlInfoRouteHandler: RouteHandler<typeof getMlInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdOpenRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdOpenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdDataRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlDataFrameAnalyticsPreviewRouteHandler: RouteHandler<
  typeof getMlDataFrameAnalyticsPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlDataFrameAnalyticsPreviewRouteHandler: RouteHandler<
  typeof postMlDataFrameAnalyticsPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlDataFrameAnalyticsIdPreviewRouteHandler: RouteHandler<
  typeof getMlDataFrameAnalyticsIdPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlDataFrameAnalyticsIdPreviewRouteHandler: RouteHandler<
  typeof postMlDataFrameAnalyticsIdPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlDatafeedsDatafeedIdPreviewRouteHandler: RouteHandler<
  typeof getMlDatafeedsDatafeedIdPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlDatafeedsDatafeedIdPreviewRouteHandler: RouteHandler<
  typeof postMlDatafeedsDatafeedIdPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMlDatafeedsPreviewRouteHandler: RouteHandler<
  typeof getMlDatafeedsPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlDatafeedsPreviewRouteHandler: RouteHandler<
  typeof postMlDatafeedsPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMlTrainedModelsModelIdDefinitionPartRouteHandler: RouteHandler<
  typeof putMlTrainedModelsModelIdDefinitionPartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMlTrainedModelsModelIdVocabularyRouteHandler: RouteHandler<
  typeof putMlTrainedModelsModelIdVocabularyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdResetRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRevertRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRevertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlSetUpgradeModeRouteHandler: RouteHandler<
  typeof postMlSetUpgradeModeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlDataFrameAnalyticsIdStartRouteHandler: RouteHandler<
  typeof postMlDataFrameAnalyticsIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlDatafeedsDatafeedIdStartRouteHandler: RouteHandler<
  typeof postMlDatafeedsDatafeedIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlTrainedModelsModelIdDeploymentStartRouteHandler: RouteHandler<
  typeof postMlTrainedModelsModelIdDeploymentStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlDataFrameAnalyticsIdStopRouteHandler: RouteHandler<
  typeof postMlDataFrameAnalyticsIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlDatafeedsDatafeedIdStopRouteHandler: RouteHandler<
  typeof postMlDatafeedsDatafeedIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlTrainedModelsModelIdDeploymentStopRouteHandler: RouteHandler<
  typeof postMlTrainedModelsModelIdDeploymentStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlDataFrameAnalyticsIdUpdateRouteHandler: RouteHandler<
  typeof postMlDataFrameAnalyticsIdUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlDatafeedsDatafeedIdUpdateRouteHandler: RouteHandler<
  typeof postMlDatafeedsDatafeedIdUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlFiltersFilterIdUpdateRouteHandler: RouteHandler<
  typeof postMlFiltersFilterIdUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdUpdateRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpdateRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlTrainedModelsModelIdDeploymentUpdateRouteHandler: RouteHandler<
  typeof postMlTrainedModelsModelIdDeploymentUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeRouteHandler: RouteHandler<
  typeof postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
