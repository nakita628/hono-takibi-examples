import { OpenAPIHono } from '@hono/zod-openapi'
import { postRecognizeTextRoute } from '../routes'

const app = new OpenAPIHono()

export const recognizeTextHandler = app.openapi(postRecognizeTextRoute, (c) => {
  throw new Error('Not implemented')
})
