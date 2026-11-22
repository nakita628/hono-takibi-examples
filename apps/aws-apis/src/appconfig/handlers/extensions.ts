import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteExtensionsExtensionIdentifierRoute,
  getExtensionsExtensionIdentifierRoute,
  getExtensionsRoute,
  patchExtensionsExtensionIdentifierRoute,
  postExtensionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const extensionsHandler = app
  .openapi(postExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExtensionsExtensionIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtensionsExtensionIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExtensionsExtensionIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
