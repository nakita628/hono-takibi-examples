import { OpenAPIHono } from '@hono/zod-openapi'
import { postWebSearchContentsRoute } from '../routes'

const app = new OpenAPIHono()

export const contentsHandler = app.openapi(postWebSearchContentsRoute, (c) => {
  throw new Error('Not implemented')
})
