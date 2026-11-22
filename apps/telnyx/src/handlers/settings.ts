import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAiMemoryNamespacesNamespaceSettingsRoute,
  patchAiMemoryNamespacesNamespaceSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getAiMemoryNamespacesNamespaceSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiMemoryNamespacesNamespaceSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
