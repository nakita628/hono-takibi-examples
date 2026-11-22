import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAiMemoryNamespacesNamespaceProfilesProfileIdSummaryRoute,
  postAiMemoryNamespacesNamespaceProfilesProfileIdIngestRoute,
  postAiMemoryNamespacesNamespaceProfilesProfileIdRecallRoute,
  postAiMemoryNamespacesNamespaceProfilesProfileIdRememberRoute,
  postAiMemoryNamespacesNamespaceProfilesProfileIdSummaryPreviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const memoryHandler = app
  .openapi(postAiMemoryNamespacesNamespaceProfilesProfileIdIngestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMemoryNamespacesNamespaceProfilesProfileIdRecallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMemoryNamespacesNamespaceProfilesProfileIdRememberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMemoryNamespacesNamespaceProfilesProfileIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMemoryNamespacesNamespaceProfilesProfileIdSummaryPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
