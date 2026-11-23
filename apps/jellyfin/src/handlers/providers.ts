import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersLyricsLyricIdRoute,
  getProvidersSubtitlesSubtitlesSubtitleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const providersHandler = app
  .openapi(getProvidersLyricsLyricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersSubtitlesSubtitlesSubtitleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
