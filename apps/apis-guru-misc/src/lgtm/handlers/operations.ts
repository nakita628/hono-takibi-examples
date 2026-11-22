import { OpenAPIHono } from '@hono/zod-openapi'
import { getOperationsOperationIdRoute } from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app.openapi(getOperationsOperationIdRoute, (c) => {
  throw new Error('Not implemented')
})
