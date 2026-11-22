import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttributeNamespaceMetaRoute,
  deleteAttributeNamespaceRoute,
  getAttributeNamespaceMetaRoute,
  getAttributeNamespaceRoute,
  getAttributeRoute,
  postAttributeNamespaceMetaRoute,
  putAttributeNamespaceMetaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attributeNamespacesHandler = app
  .openapi(getAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAttributeNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttributeNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAttributeNamespaceMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttributeNamespaceMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttributeNamespaceMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAttributeNamespaceMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
