import { OpenAPIHono } from '@hono/zod-openapi'
import { postRemotestoreRestoreRoute } from '../routes'

const app = new OpenAPIHono()

export const remotestoreHandler = app.openapi(postRemotestoreRestoreRoute, (c) => {
  throw new Error('Not implemented')
})
