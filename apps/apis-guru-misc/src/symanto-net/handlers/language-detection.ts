import { OpenAPIHono } from '@hono/zod-openapi'
import { postLanguageDetectionRoute } from '../routes'

const app = new OpenAPIHono()

export const languageDetectionHandler = app.openapi(postLanguageDetectionRoute, (c) => {
  throw new Error('Not implemented')
})
