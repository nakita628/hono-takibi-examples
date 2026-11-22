import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosItemIdSubtitlesIndexRoute,
  getFallbackFontFontsNameRoute,
  getFallbackFontFontsRoute,
  getItemsItemIdRemoteSearchSubtitlesLanguageRoute,
  getProvidersSubtitlesSubtitlesSubtitleIdRoute,
  getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8Route,
  getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatRoute,
  getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatRoute,
  postItemsItemIdRemoteSearchSubtitlesSubtitleIdRoute,
  postVideosItemIdSubtitlesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subtitleHandler = app
  .openapi(getFallbackFontFontsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFallbackFontFontsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdRemoteSearchSubtitlesLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdRemoteSearchSubtitlesSubtitleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersSubtitlesSubtitlesSubtitleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
