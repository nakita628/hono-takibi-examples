import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiMemoryNamespacesNamespaceRoute,
  getAiMemoryNamespacesRoute,
  postAiMemoryNamespacesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const namespacesHandler = app
  .openapi(getAiMemoryNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMemoryNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiMemoryNamespacesNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
