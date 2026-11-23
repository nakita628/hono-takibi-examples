import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlaybackConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const playbackConfigurationsHandler = app.openapi(getPlaybackConfigurationsRoute, (c) => {
  throw new Error('Not implemented')
})
