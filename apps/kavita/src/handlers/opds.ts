import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiOpdsApiKeyCollectionsCollectionIdRoute,
  getApiOpdsApiKeyCollectionsRoute,
  getApiOpdsApiKeyFaviconRoute,
  getApiOpdsApiKeyImageRoute,
  getApiOpdsApiKeyLibrariesLibraryIdRoute,
  getApiOpdsApiKeyLibrariesRoute,
  getApiOpdsApiKeyOnDeckRoute,
  getApiOpdsApiKeyReadingListReadingListIdRoute,
  getApiOpdsApiKeyReadingListRoute,
  getApiOpdsApiKeyRecentlyAddedRoute,
  getApiOpdsApiKeyRecentlyUpdatedRoute,
  getApiOpdsApiKeyRoute,
  getApiOpdsApiKeySearchRoute,
  getApiOpdsApiKeySeriesRoute,
  getApiOpdsApiKeySeriesSeriesIdRoute,
  getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdDownloadFilenameRoute,
  getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdRoute,
  getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdRoute,
  getApiOpdsApiKeySmartFiltersFilterIdRoute,
  getApiOpdsApiKeySmartFiltersRoute,
  getApiOpdsApiKeyWantToReadRoute,
  postApiOpdsApiKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const opdsHandler = app
  .openapi(postApiOpdsApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeySmartFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeySmartFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyLibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyWantToReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyReadingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyReadingListReadingListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyLibrariesLibraryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyRecentlyAddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyRecentlyUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyOnDeckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeySeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeySeriesSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdDownloadFilenameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiOpdsApiKeyImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyFaviconRoute, (c) => {
    throw new Error('Not implemented')
  })
