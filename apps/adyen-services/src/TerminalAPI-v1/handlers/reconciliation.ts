import { OpenAPIHono } from '@hono/zod-openapi'
import { postReconciliationRoute } from '../routes'

const app = new OpenAPIHono()

export const reconciliationHandler = app.openapi(postReconciliationRoute, (c) => {
  throw new Error('Not implemented')
})
