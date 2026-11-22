import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameRoute, getV1OperationsRoute } from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app
  .openapi(getV1OperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
