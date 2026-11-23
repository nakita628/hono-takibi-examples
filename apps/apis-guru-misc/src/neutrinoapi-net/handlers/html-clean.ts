import { OpenAPIHono } from '@hono/zod-openapi'
import { postHtmlCleanRoute } from '../routes'

const app = new OpenAPIHono()

export const htmlCleanHandler = app.openapi(postHtmlCleanRoute, (c) => {
  throw new Error('Not implemented')
})
