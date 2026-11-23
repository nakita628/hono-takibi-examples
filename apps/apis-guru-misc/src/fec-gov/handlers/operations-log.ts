import { OpenAPIHono } from '@hono/zod-openapi'
import { getOperationsLogIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const operationsLogHandler = app.openapi(getOperationsLogIndexRoute, (c) => {
  throw new Error('Not implemented')
})
