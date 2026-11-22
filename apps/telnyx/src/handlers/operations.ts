import { OpenAPIHono } from '@hono/zod-openapi'
import { getAiMemoryNamespacesNamespaceOperationsOperationIdRoute } from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app.openapi(
  getAiMemoryNamespacesNamespaceOperationsOperationIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
