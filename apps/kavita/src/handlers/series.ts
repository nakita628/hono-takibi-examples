import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiSeriesSeriesIdRoute,
  getApiSeriesAgeRatingRoute,
  getApiSeriesAllRelatedRoute,
  getApiSeriesChapterRoute,
  getApiSeriesCurrentlyReadingRoute,
  getApiSeriesExternalSeriesDetailRoute,
  getApiSeriesMatchInfoRoute,
  getApiSeriesMetadataRoute,
  getApiSeriesNextExpectedRoute,
  getApiSeriesRelatedRoute,
  getApiSeriesSeriesByCollectionRoute,
  getApiSeriesSeriesDetailRoute,
  getApiSeriesSeriesIdRoute,
  getApiSeriesSeriesWithAnnotationsRoute,
  getApiSeriesVolumeRoute,
  getApiSeriesVolumesRoute,
  postApiSeriesAllV2Route,
  postApiSeriesAnalyzeRoute,
  postApiSeriesDeleteMultipleRoute,
  postApiSeriesDontMatchRoute,
  postApiSeriesMatchRoute,
  postApiSeriesMetadataRoute,
  postApiSeriesOnDeckRoute,
  postApiSeriesRecentlyAddedV2Route,
  postApiSeriesRecentlyUpdatedSeriesRoute,
  postApiSeriesRefreshMetadataRoute,
  postApiSeriesRemoveFromOnDeckRoute,
  postApiSeriesScanRoute,
  postApiSeriesSeriesByIdsRoute,
  postApiSeriesUpdateMatchRoute,
  postApiSeriesUpdateRelatedRoute,
  postApiSeriesUpdateRoute,
  postApiSeriesV2Route,
} from '../routes'

const app = new OpenAPIHono()

export const seriesHandler = app
  .openapi(postApiSeriesV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSeriesSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesDeleteMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesRecentlyAddedV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesRecentlyUpdatedSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesAllV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesOnDeckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesRemoveFromOnDeckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesCurrentlyReadingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesRefreshMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesSeriesByCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesSeriesByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesAgeRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesSeriesDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesAllRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesUpdateRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesExternalSeriesDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesNextExpectedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesUpdateMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesDontMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesMatchInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesSeriesWithAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
