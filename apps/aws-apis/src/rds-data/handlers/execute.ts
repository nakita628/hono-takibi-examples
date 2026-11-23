import { OpenAPIHono } from '@hono/zod-openapi'
import { postExecuteRoute } from '../routes'

const app = new OpenAPIHono()

export const executeHandler = app.openapi(postExecuteRoute, (c) => {
  throw new Error('Not implemented')
})
