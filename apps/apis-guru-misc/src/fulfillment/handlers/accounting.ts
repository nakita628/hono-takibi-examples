import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountingRoute } from '../routes'

const app = new OpenAPIHono()

export const accountingHandler = app.openapi(getAccountingRoute, (c) => {
  throw new Error('Not implemented')
})
