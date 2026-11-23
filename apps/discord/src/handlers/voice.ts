import { OpenAPIHono } from '@hono/zod-openapi'
import { getVoiceRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const voiceHandler = app.openapi(getVoiceRegionsRoute, (c) => {
  throw new Error('Not implemented')
})
