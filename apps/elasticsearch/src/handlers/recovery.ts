import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecoveryRoute } from '../routes'

const app = new OpenAPIHono()

export const recoveryHandler = app.openapi(getRecoveryRoute, (c) => {
  throw new Error('Not implemented')
})
