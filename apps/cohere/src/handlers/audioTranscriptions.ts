import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2AudioTranscriptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const audioTranscriptionsHandler = app.openapi(postV2AudioTranscriptionsRoute, (c) => {
  throw new Error('Not implemented')
})
