import { OpenAPIHono } from '@hono/zod-openapi'
import { getOperationIdRoute } from '../routes'

const app = new OpenAPIHono()

export const operationHandler = app.openapi(getOperationIdRoute, (c) => {
  throw new Error('Not implemented')
})
