import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlaybackBitrateTestRoute } from '../routes'

const app = new OpenAPIHono()

export const playbackHandler = app.openapi(getPlaybackBitrateTestRoute, (c) => {
  throw new Error('Not implemented')
})
