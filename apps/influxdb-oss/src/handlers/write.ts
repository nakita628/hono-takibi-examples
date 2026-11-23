import { OpenAPIHono } from '@hono/zod-openapi'
import { postWriteRoute } from '../routes'

const app = new OpenAPIHono()

export const writeHandler = app.openapi(postWriteRoute, (c) => {
  throw new Error('Not implemented')
})
