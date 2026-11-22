import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosActiveEncodingsRoute,
  getAudioItemIdHlsSegmentIdStreamAacRoute,
  getAudioItemIdHlsSegmentIdStreamMp3Route,
  getVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerRoute,
  getVideosItemIdHlsPlaylistIdStreamM3u8Route,
} from '../routes'

const app = new OpenAPIHono()

export const hlsSegmentHandler = app
  .openapi(getAudioItemIdHlsSegmentIdStreamAacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudioItemIdHlsSegmentIdStreamMp3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosActiveEncodingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdHlsPlaylistIdStreamM3u8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerRoute, (c) => {
    throw new Error('Not implemented')
  })
