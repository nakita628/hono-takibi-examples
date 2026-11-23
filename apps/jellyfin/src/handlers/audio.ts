import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAudioItemIdLyricsRoute,
  getAudioItemIdLyricsRoute,
  getAudioItemIdRemoteSearchLyricsRoute,
  getAudioItemIdStreamContainerRoute,
  getAudioItemIdStreamRoute,
  getAudioItemIdUniversalRoute,
  headAudioItemIdStreamContainerRoute,
  headAudioItemIdStreamRoute,
  headAudioItemIdUniversalRoute,
  postAudioItemIdLyricsRoute,
  postAudioItemIdRemoteSearchLyricsLyricIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const audioHandler = app
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
  .openapi(getAudioItemIdLyricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAudioItemIdLyricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAudioItemIdLyricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudioItemIdRemoteSearchLyricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAudioItemIdRemoteSearchLyricsLyricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudioItemIdUniversalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headAudioItemIdUniversalRoute, (c) => {
    throw new Error('Not implemented')
  })
