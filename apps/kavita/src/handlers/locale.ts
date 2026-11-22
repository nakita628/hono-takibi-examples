import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiLocaleRoute } from '../routes'

const app = new OpenAPIHono()

export const localeHandler = app.openapi(getApiLocaleRoute, (c) => {
  throw new Error('Not implemented')
})
