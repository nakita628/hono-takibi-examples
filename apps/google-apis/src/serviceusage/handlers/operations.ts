import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1OperationsRoute } from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app.openapi(getV1beta1OperationsRoute, (c) => {
  throw new Error('Not implemented')
})
