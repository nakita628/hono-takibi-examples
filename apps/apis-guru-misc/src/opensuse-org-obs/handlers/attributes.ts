import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttributeNamespaceAttributeNameMetaRoute,
  deleteAttributeNamespaceAttributeNameRoute,
  getAttributeNamespaceAttributeNameMetaRoute,
  postAttributeNamespaceAttributeNameMetaRoute,
  putAttributeNamespaceAttributeNameMetaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attributesHandler = app
  .openapi(deleteAttributeNamespaceAttributeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAttributeNamespaceAttributeNameMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttributeNamespaceAttributeNameMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttributeNamespaceAttributeNameMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAttributeNamespaceAttributeNameMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
