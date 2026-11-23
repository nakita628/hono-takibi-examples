import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttributeNamespaceAttributeNameMetaRoute,
  deleteAttributeNamespaceAttributeNameRoute,
  deleteAttributeNamespaceMetaRoute,
  deleteAttributeNamespaceRoute,
  getAttributeNamespaceAttributeNameMetaRoute,
  getAttributeNamespaceMetaRoute,
  getAttributeNamespaceRoute,
  getAttributeRoute,
  postAttributeNamespaceAttributeNameMetaRoute,
  postAttributeNamespaceMetaRoute,
  putAttributeNamespaceAttributeNameMetaRoute,
  putAttributeNamespaceMetaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attributeHandler = app
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
