import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosActiveEncodingsRoute,
  deleteVideosItemIdAlternateSourcesRoute,
  deleteVideosItemIdSubtitlesIndexRoute,
  getVideosItemIdAdditionalPartsRoute,
  getVideosItemIdHls1PlaylistIdSegmentIdContainerRoute,
  getVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerRoute,
  getVideosItemIdHlsPlaylistIdStreamM3u8Route,
  getVideosItemIdLiveM3u8Route,
  getVideosItemIdMainM3u8Route,
  getVideosItemIdMasterM3u8Route,
  getVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormatRoute,
  getVideosItemIdMediaSourceIdSubtitlesIndexStreamFormatRoute,
  getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8Route,
  getVideosItemIdStreamContainerRoute,
  getVideosItemIdStreamRoute,
  getVideosVideoIdMediaSourceIdAttachmentsIndexRoute,
  headVideosItemIdMasterM3u8Route,
  headVideosItemIdStreamContainerRoute,
  headVideosItemIdStreamRoute,
  postVideosItemIdSubtitlesRoute,
  postVideosMergeVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosHandler = app
  .openapi(deleteVideosActiveEncodingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosMergeVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdAdditionalPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosItemIdAlternateSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosItemIdSubtitlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosItemIdSubtitlesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdHlsPlaylistIdStreamM3u8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdHls1PlaylistIdSegmentIdContainerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdLiveM3u8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdMainM3u8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdMasterM3u8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headVideosItemIdMasterM3u8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headVideosItemIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdMediaSourceIdSubtitlesIndexStreamFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdStreamContainerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headVideosItemIdStreamContainerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdMediaSourceIdAttachmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
