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
  deleteMlDeleteExpiredDataJobIdRoute,
  deleteMlDeleteExpiredDataRoute,
  deleteMlFiltersFilterIdRoute,
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
  getMlFiltersFilterIdRoute,
  getMlFiltersRoute,
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
  postMlFiltersFilterIdUpdateRoute,
  putMlAnomalyDetectorsJobIdRoute,
  putMlCalendarsCalendarIdJobsJobIdRoute,
  putMlCalendarsCalendarIdRoute,
  putMlDatafeedsDatafeedIdRoute,
  putMlFiltersFilterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mlAnomalyHandler = app
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
  .openapi(postMlAnomalyDetectorsEstimateModelMemoryRoute, (c) => {
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
  .openapi(postMlAnomalyDetectorsJobIdOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdDataRoute, (c) => {
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
  .openapi(postMlAnomalyDetectorsJobIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDatafeedsDatafeedIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDatafeedsDatafeedIdStopRoute, (c) => {
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
  .openapi(postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
