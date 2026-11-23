import { OpenAPIHono } from '@hono/zod-openapi'
import { putAudioTranscribeRoute } from '../routes'

const app = new OpenAPIHono()

export const audioHandler = app.openapi(putAudioTranscribeRoute, (c) => {
  throw new Error('Not implemented')
})
