import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmRestoreRoute } from '../routes'

const app = new OpenAPIHono()

export const vmRestoreHandler = app.openapi(putVmRestoreRoute, (c) => {
  throw new Error('Not implemented')
})
