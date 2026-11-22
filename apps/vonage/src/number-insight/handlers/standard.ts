import { OpenAPIHono } from '@hono/zod-openapi'
import { getStandardFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const standardHandler = app.openapi(getStandardFormatRoute, (c) => {
  throw new Error('Not implemented')
})
