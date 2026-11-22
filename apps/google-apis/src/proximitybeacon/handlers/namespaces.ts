import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1NamespacesRoute, putV1beta1NamespaceNameRoute } from '../routes'

const app = new OpenAPIHono()

export const namespacesHandler = app
  .openapi(getV1beta1NamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1beta1NamespaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
