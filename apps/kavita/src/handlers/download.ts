import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiDownloadChapterRoute,
  getApiDownloadChapterSizeRoute,
  getApiDownloadReadinglistSizeRoute,
  getApiDownloadSeriesRoute,
  getApiDownloadSeriesSizeRoute,
  getApiDownloadVolumeRoute,
  getApiDownloadVolumeSizeRoute,
  postApiDownloadBookmarksRoute,
  postApiDownloadBulkChapterSizeRoute,
  postApiDownloadBulkReadinglistSizeRoute,
  postApiDownloadBulkSeriesSizeRoute,
  postApiDownloadBulkVolumeSizeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const downloadHandler = app
  .openapi(getApiDownloadVolumeSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDownloadBulkVolumeSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDownloadChapterSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDownloadBulkChapterSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDownloadSeriesSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDownloadReadinglistSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDownloadBulkReadinglistSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDownloadBulkSeriesSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDownloadVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDownloadChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDownloadSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDownloadBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
