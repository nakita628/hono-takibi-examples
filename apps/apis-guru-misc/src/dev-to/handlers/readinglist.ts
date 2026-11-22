import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiReadinglistRoute } from '../routes'

const app = new OpenAPIHono()

export const readinglistHandler = app.openapi(getApiReadinglistRoute, (c) => {
  throw new Error('Not implemented')
})
