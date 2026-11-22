import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV4MarkdownRoute } from '../routes'

const app = new OpenAPIHono()

export const markdownHandler = app.openapi(postApiV4MarkdownRoute, (c) => {
  throw new Error('Not implemented')
})
