import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SeriesSeriesIdFileRoute,
  deleteApiV1SeriesSeriesIdReadProgressRoute,
  getApiV1SeriesAlphabeticalGroupsRoute,
  getApiV1SeriesLatestRoute,
  getApiV1SeriesNewRoute,
  getApiV1SeriesRoute,
  getApiV1SeriesSeriesIdBooksRoute,
  getApiV1SeriesSeriesIdCollectionsRoute,
  getApiV1SeriesSeriesIdFileRoute,
  getApiV1SeriesSeriesIdRoute,
  getApiV1SeriesUpdatedRoute,
  patchApiV1SeriesSeriesIdMetadataRoute,
  postApiV1SeriesListAlphabeticalGroupsRoute,
  postApiV1SeriesListRoute,
  postApiV1SeriesSeriesIdAnalyzeRoute,
  postApiV1SeriesSeriesIdMetadataRefreshRoute,
  postApiV1SeriesSeriesIdReadProgressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const seriesHandler = app
  .openapi(getApiV1SeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesAlphabeticalGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SeriesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SeriesListAlphabeticalGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SeriesSeriesIdAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesSeriesIdBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesSeriesIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SeriesSeriesIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesSeriesIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1SeriesSeriesIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SeriesSeriesIdMetadataRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SeriesSeriesIdReadProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SeriesSeriesIdReadProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
