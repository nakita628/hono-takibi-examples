import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNamespaceNamespaceNameRoute,
  getNamespaceNamespaceNameRoute,
  getNamespacesRoute,
  postNamespaceNamespaceNameRoute,
  postNamespaceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const namespacesHandler = app
  .openapi(postNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNamespaceNamespaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespaceNamespaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespaceNamespaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
