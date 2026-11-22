import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAudioItemIdLyricsRoute,
  getAudioItemIdLyricsRoute,
  getAudioItemIdRemoteSearchLyricsRoute,
  getProvidersLyricsLyricIdRoute,
  postAudioItemIdLyricsRoute,
  postAudioItemIdRemoteSearchLyricsLyricIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lyricHandler = app
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
  .openapi(getProvidersLyricsLyricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
