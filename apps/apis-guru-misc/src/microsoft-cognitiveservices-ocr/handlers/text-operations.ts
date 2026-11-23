import { OpenAPIHono } from '@hono/zod-openapi'
import { getTextOperationsOperationIdRoute } from '../routes'

const app = new OpenAPIHono()

export const textOperationsHandler = app.openapi(getTextOperationsOperationIdRoute, (c) => {
  throw new Error('Not implemented')
})
