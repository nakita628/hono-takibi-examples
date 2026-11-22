import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSyncPlaybackIdRoute,
  getSyncCollectionTypeRoute,
  getSyncHistoryTypeIdRoute,
  getSyncLastActivitiesRoute,
  getSyncPlaybackTypeRoute,
  getSyncRatingsTypeRatingRoute,
  getSyncRecommendationsTypeSortRoute,
  getSyncWatchedTypeRoute,
  getSyncWatchlistTypeSortRoute,
  postSyncCollectionRemoveRoute,
  postSyncCollectionRoute,
  postSyncHistoryRemoveRoute,
  postSyncHistoryRoute,
  postSyncRatingsRemoveRoute,
  postSyncRatingsRoute,
  postSyncRecommendationsRemoveRoute,
  postSyncRecommendationsReorderRoute,
  postSyncRecommendationsRoute,
  postSyncWatchlistRemoveRoute,
  postSyncWatchlistReorderRoute,
  postSyncWatchlistRoute,
} from '../routes'

const app = new OpenAPIHono()

export const syncHandler = app
  .openapi(postSyncCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncCollectionRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSyncCollectionTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncHistoryRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSyncHistoryTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSyncLastActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSyncPlaybackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSyncPlaybackTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncRatingsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSyncRatingsTypeRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncRecommendationsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncRecommendationsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSyncRecommendationsTypeSortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSyncWatchedTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncWatchlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncWatchlistRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncWatchlistReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSyncWatchlistTypeSortRoute, (c) => {
    throw new Error('Not implemented')
  })
