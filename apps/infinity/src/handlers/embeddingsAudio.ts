import { OpenAPIHono } from '@hono/zod-openapi'
import { postEmbeddingsAudioRoute } from '../routes'

const app = new OpenAPIHono()

export const embeddingsAudioHandler = app.openapi(postEmbeddingsAudioRoute, (c) => {
  throw new Error('Not implemented')
})
