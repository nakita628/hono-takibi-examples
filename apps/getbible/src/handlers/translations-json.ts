import { OpenAPIHono } from '@hono/zod-openapi'
import { getTranslationsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const translationsJsonHandler = app.openapi(getTranslationsJsonRoute, (c) => {
  throw new Error('Not implemented')
})
