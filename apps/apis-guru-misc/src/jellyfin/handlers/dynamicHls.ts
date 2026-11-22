import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAudioItemIdHls1PlaylistIdSegmentIdContainerRoute,
  getAudioItemIdMainM3u8Route,
  getAudioItemIdMasterM3u8Route,
  getVideosItemIdHls1PlaylistIdSegmentIdContainerRoute,
  getVideosItemIdMainM3u8Route,
  getVideosItemIdMasterM3u8Route,
  headAudioItemIdMasterM3u8Route,
  headVideosItemIdMasterM3u8Route,
} from '../routes'

const app = new OpenAPIHono()

export const dynamicHlsHandler = app
  .openapi(getAudioItemIdHls1PlaylistIdSegmentIdContainerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudioItemIdMainM3u8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudioItemIdMasterM3u8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headAudioItemIdMasterM3u8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosItemIdHls1PlaylistIdSegmentIdContainerRoute, (c) => {
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
