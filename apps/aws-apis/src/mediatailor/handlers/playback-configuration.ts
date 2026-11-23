import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlaybackConfigurationNameRoute,
  getPlaybackConfigurationNameRoute,
  putPlaybackConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playbackConfigurationHandler = app
  .openapi(deletePlaybackConfigurationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaybackConfigurationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlaybackConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
