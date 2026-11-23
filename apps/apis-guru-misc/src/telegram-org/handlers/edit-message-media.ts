import { OpenAPIHono } from '@hono/zod-openapi'
import { postEditMessageMediaRoute } from '../routes'

const app = new OpenAPIHono()

export const editMessageMediaHandler = app.openapi(postEditMessageMediaRoute, (c) => {
  throw new Error('Not implemented')
})
