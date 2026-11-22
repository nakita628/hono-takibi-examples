import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiStatsAvgTimeByHourRoute,
  getApiStatsDayBreakdownRoute,
  getApiStatsDeviceClientTypeRoute,
  getApiStatsDeviceDeviceTypeRoute,
  getApiStatsFavoriteAuthorsRoute,
  getApiStatsFilesAddedOverTimeRoute,
  getApiStatsGenreBreakdownRoute,
  getApiStatsMostActiveUsersRoute,
  getApiStatsPagesPerYearRoute,
  getApiStatsPageSpreadRoute,
  getApiStatsPopularDecadesRoute,
  getApiStatsPopularGenresRoute,
  getApiStatsPopularLibrariesRoute,
  getApiStatsPopularPeopleRoute,
  getApiStatsPopularReadingListRoute,
  getApiStatsPopularSeriesRoute,
  getApiStatsPopularTagsRoute,
  getApiStatsReadingActivityRoute,
  getApiStatsReadingCountsRoute,
  getApiStatsReadingHistoryRoute,
  getApiStatsReadingHistorySeriesSeriesIdRoute,
  getApiStatsReadingPaceRoute,
  getApiStatsReadsByMonthRoute,
  getApiStatsServerCountMangaFormatRoute,
  getApiStatsServerCountPublicationStatusRoute,
  getApiStatsServerFileBreakdownRoute,
  getApiStatsServerFileExtensionRoute,
  getApiStatsServerStatsRoute,
  getApiStatsTagBreakdownRoute,
  getApiStatsTotalReadsRoute,
  getApiStatsUserReadRoute,
  getApiStatsUserStatsRoute,
  getApiStatsWordsPerYearRoute,
  getApiStatsWordSpreadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app
  .openapi(getApiStatsServerStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsServerCountPublicationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsServerCountMangaFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPopularDecadesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPopularLibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPopularSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPopularReadingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPopularGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPopularTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPopularPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsMostActiveUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsServerFileBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsServerFileExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsReadingCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsDayBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPagesPerYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsWordsPerYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsFilesAddedOverTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsDeviceClientTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsDeviceDeviceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsReadingActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsReadingPaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsGenreBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsTagBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPageSpreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsWordSpreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsFavoriteAuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsAvgTimeByHourRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsReadsByMonthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsTotalReadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsUserStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsUserReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsReadingHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsReadingHistorySeriesSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
