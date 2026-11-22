import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiAiTranscribeRoute } from '../routes'

const app = new OpenAPIHono()

export const aiServiceHandler = app.openapi(postApiAiTranscribeRoute, (c) => {
  throw new Error('Not implemented')
})
