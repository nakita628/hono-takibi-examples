import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAssetsIdEditsRoute,
  deleteAssetsIdMetadataKeyRoute,
  deleteAssetsIdVideoStreamSessionIdRoute,
  deleteAssetsMetadataRoute,
  deleteAssetsRoute,
  getAssetsIdEditsRoute,
  getAssetsIdMetadataKeyRoute,
  getAssetsIdMetadataRoute,
  getAssetsIdOcrRoute,
  getAssetsIdOriginalRoute,
  getAssetsIdRoute,
  getAssetsIdThumbnailRoute,
  getAssetsIdVideoPlaybackRoute,
  getAssetsIdVideoStreamMainM3u8Route,
  getAssetsIdVideoStreamSessionIdVariantIndexFilenameRoute,
  getAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8Route,
  getAssetsStatisticsRoute,
  postAssetsBulkUploadCheckRoute,
  postAssetsJobsRoute,
  postAssetsRoute,
  putAssetsCopyRoute,
  putAssetsIdEditsRoute,
  putAssetsIdMetadataRoute,
  putAssetsIdRoute,
  putAssetsMetadataRoute,
  putAssetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app
  .openapi(deleteAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsBulkUploadCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssetsCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssetsMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssetsMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssetsIdEditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsIdEditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssetsIdEditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssetsIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssetsIdMetadataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsIdMetadataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsIdOcrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsIdOriginalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsIdVideoPlaybackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsIdVideoStreamMainM3u8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssetsIdVideoStreamSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsIdVideoStreamSessionIdVariantIndexFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
