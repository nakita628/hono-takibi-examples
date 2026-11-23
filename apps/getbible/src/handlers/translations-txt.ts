import { OpenAPIHono } from '@hono/zod-openapi'
import { getTranslationsTxtRoute } from '../routes'

const app = new OpenAPIHono()

export const translationsTxtHandler = app.openapi(getTranslationsTxtRoute, (c) => {
  throw new Error('Not implemented')
})
