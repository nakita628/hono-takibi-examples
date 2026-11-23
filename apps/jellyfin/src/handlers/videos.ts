import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosItemIdAlternateSourcesRoute,
  deleteVideosItemIdSubtitlesIndexRoute,
  getVideosItemIdAdditionalPartsRoute,
  getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8Route,
  getVideosItemIdStreamContainerRoute,
  getVideosItemIdStreamRoute,
  getVideosItemIdTrickplayWidthIndexJpgRoute,
  getVideosItemIdTrickplayWidthTilesM3u8Route,
  getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatRoute,
  getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatRoute,
  getVideosVideoIdMediaSourceIdAttachmentsIndexRoute,
  headVideosItemIdStreamContainerRoute,
  headVideosItemIdStreamRoute,
  postVideosItemIdSubtitlesRoute,
  postVideosMergeVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosHandler = app
  .openapi(getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosItemIdSubtitlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosItemIdSubtitlesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdTrickplayWidthIndexJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdTrickplayWidthTilesM3u8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdMediaSourceIdAttachmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdAdditionalPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosItemIdAlternateSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headVideosItemIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdStreamContainerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headVideosItemIdStreamContainerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosMergeVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
