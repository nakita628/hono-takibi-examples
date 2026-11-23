import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getExtensionsRoute,
  patchExtensionsBundleNameRoute,
  patchExtensionsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const extensionsHandler = app
  .openapi(getExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExtensionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExtensionsBundleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
