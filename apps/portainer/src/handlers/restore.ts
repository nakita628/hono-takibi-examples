import { OpenAPIHono } from '@hono/zod-openapi'
import { postRestoreRoute } from '../routes'

const app = new OpenAPIHono()

export const restoreHandler = app.openapi(postRestoreRoute, (c) => {
  throw new Error('Not implemented')
})
