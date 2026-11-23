import { OpenAPIHono } from '@hono/zod-openapi'
import { postHtmlRenderRoute } from '../routes'

const app = new OpenAPIHono()

export const htmlRenderHandler = app.openapi(postHtmlRenderRoute, (c) => {
  throw new Error('Not implemented')
})
