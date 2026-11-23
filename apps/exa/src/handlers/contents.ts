import { OpenAPIHono } from '@hono/zod-openapi'
import { postContentsRoute } from '../routes'

const app = new OpenAPIHono()

export const contentsHandler = app.openapi(postContentsRoute, (c) => {
  throw new Error('Not implemented')
})
