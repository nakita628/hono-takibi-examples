import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetFileRoute } from '../routes'

const app = new OpenAPIHono()

export const getFileHandler = app.openapi(postGetFileRoute, (c) => {
  throw new Error('Not implemented')
})
