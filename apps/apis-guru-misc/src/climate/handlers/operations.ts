import { OpenAPIHono } from '@hono/zod-openapi'
import { getV4OperationsAllRoute } from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app.openapi(getV4OperationsAllRoute, (c) => {
  throw new Error('Not implemented')
})
