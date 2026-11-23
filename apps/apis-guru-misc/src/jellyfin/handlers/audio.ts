import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAudioItemIdHls1PlaylistIdSegmentIdContainerRoute,
  getAudioItemIdHlsSegmentIdStreamAacRoute,
  getAudioItemIdHlsSegmentIdStreamMp3Route,
  getAudioItemIdMainM3u8Route,
  getAudioItemIdMasterM3u8Route,
  getAudioItemIdStreamContainerRoute,
  getAudioItemIdStreamRoute,
  getAudioItemIdUniversalRoute,
  headAudioItemIdMasterM3u8Route,
  headAudioItemIdStreamContainerRoute,
  headAudioItemIdStreamRoute,
  headAudioItemIdUniversalRoute,
} from '../routes'

const app = new OpenAPIHono()

export const audioHandler = app
  .openapi(getAudioItemIdHlsSegmentIdStreamAacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudioItemIdHlsSegmentIdStreamMp3Route, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getAudioItemIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headAudioItemIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudioItemIdStreamContainerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headAudioItemIdStreamContainerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudioItemIdUniversalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headAudioItemIdUniversalRoute, (c) => {
    throw new Error('Not implemented')
  })
