import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSchemaExtensionsSchemaExtensionIdRoute,
  getSchemaExtensionsCountRoute,
  getSchemaExtensionsRoute,
  getSchemaExtensionsSchemaExtensionIdRoute,
  patchSchemaExtensionsSchemaExtensionIdRoute,
  postSchemaExtensionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schemaExtensionsSchemaExtensionHandler = app
  .openapi(getSchemaExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSchemaExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemaExtensionsSchemaExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSchemaExtensionsSchemaExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSchemaExtensionsSchemaExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemaExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
