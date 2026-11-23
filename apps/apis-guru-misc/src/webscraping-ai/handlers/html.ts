import { OpenAPIHono } from '@hono/zod-openapi'
import { getHtmlRoute } from '../routes'

const app = new OpenAPIHono()

export const htmlHandler = app.openapi(getHtmlRoute, (c) => {
  throw new Error('Not implemented')
})
