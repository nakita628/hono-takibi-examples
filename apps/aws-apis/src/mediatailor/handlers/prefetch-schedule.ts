import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrefetchSchedulePlaybackConfigurationNameNameRoute,
  getPrefetchSchedulePlaybackConfigurationNameNameRoute,
  postPrefetchSchedulePlaybackConfigurationNameNameRoute,
  postPrefetchSchedulePlaybackConfigurationNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const prefetchScheduleHandler = app
  .openapi(postPrefetchSchedulePlaybackConfigurationNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrefetchSchedulePlaybackConfigurationNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrefetchSchedulePlaybackConfigurationNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrefetchSchedulePlaybackConfigurationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
