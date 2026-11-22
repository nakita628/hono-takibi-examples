import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiReaderPtocRoute,
  getApiReaderBookmarkImageRoute,
  getApiReaderBookmarkInfoRoute,
  getApiReaderChapterBookmarksRoute,
  getApiReaderChapterInfoRoute,
  getApiReaderContinuePointRoute,
  getApiReaderFileDimensionsRoute,
  getApiReaderFirstProgressDateRoute,
  getApiReaderGetProgressRoute,
  getApiReaderHasProgressRoute,
  getApiReaderImageRoute,
  getApiReaderNextChapterRoute,
  getApiReaderPdfRoute,
  getApiReaderPrevChapterRoute,
  getApiReaderPromptRereadChapterRoute,
  getApiReaderPromptRereadSeriesRoute,
  getApiReaderPromptRereadVolumeRoute,
  getApiReaderPtocRoute,
  getApiReaderSeriesBookmarksRoute,
  getApiReaderThumbnailRoute,
  getApiReaderTimeLeftForChapterRoute,
  getApiReaderTimeLeftRoute,
  getApiReaderVolumeBookmarksRoute,
  postApiReaderAllBookmarksRoute,
  postApiReaderBookmarkRoute,
  postApiReaderBulkRemoveBookmarksRoute,
  postApiReaderCreatePtocRoute,
  postApiReaderMarkChapterReadRoute,
  postApiReaderMarkMultipleReadRoute,
  postApiReaderMarkMultipleSeriesReadRoute,
  postApiReaderMarkMultipleSeriesUnreadRoute,
  postApiReaderMarkMultipleUnreadRoute,
  postApiReaderMarkReadRoute,
  postApiReaderMarkUnreadRoute,
  postApiReaderMarkVolumeReadRoute,
  postApiReaderMarkVolumeUnreadRoute,
  postApiReaderProgressRoute,
  postApiReaderRemoveBookmarksRoute,
  postApiReaderUnbookmarkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const readerHandler = app
  .openapi(getApiReaderPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderBookmarkImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderFileDimensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderChapterInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderBookmarkInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkChapterReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkVolumeUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkVolumeReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkMultipleReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkMultipleUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkMultipleSeriesReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkMultipleSeriesUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderGetProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderContinuePointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderHasProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderChapterBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderAllBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderRemoveBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderBulkRemoveBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderVolumeBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderSeriesBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderBookmarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderUnbookmarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderNextChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderPrevChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderTimeLeftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderTimeLeftForChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderPtocRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReaderPtocRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderCreatePtocRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderPromptRereadSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderPromptRereadVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderPromptRereadChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderFirstProgressDateRoute, (c) => {
    throw new Error('Not implemented')
  })
