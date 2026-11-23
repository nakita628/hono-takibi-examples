import { OpenAPIHono } from '@hono/zod-openapi'
import { putConfigureLogsChannelRoute, putConfigureLogsPlaybackConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const configureLogsHandler = app
  .openapi(putConfigureLogsChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConfigureLogsPlaybackConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
