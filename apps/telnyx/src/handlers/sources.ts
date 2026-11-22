import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceIdRoute,
  getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesRoute,
  getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourcesHandler = app
  .openapi(getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMemoryNamespacesNamespaceProfilesProfileIdSourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
