import { OpenAPIHono } from '@hono/zod-openapi'
import { postSingFrameAudioQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const singFrameAudioQueryHandler = app.openapi(postSingFrameAudioQueryRoute, (c) => {
  throw new Error('Not implemented')
})
