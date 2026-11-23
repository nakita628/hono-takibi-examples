import { OpenAPIHono } from '@hono/zod-openapi'
import { getTranslationsShaRoute } from '../routes'

const app = new OpenAPIHono()

export const translationsShaHandler = app.openapi(getTranslationsShaRoute, (c) => {
  throw new Error('Not implemented')
})
