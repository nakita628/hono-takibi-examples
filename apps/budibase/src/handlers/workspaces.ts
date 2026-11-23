import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkspacesWorkspaceIdRoute,
  getWorkspacesWorkspaceIdGroupsRoute,
  getWorkspacesWorkspaceIdRoute,
  postWorkspacesRoute,
  postWorkspacesSearchRoute,
  postWorkspacesWorkspaceIdExportRoute,
  postWorkspacesWorkspaceIdImportRoute,
  postWorkspacesWorkspaceIdPublishRoute,
  postWorkspacesWorkspaceIdUnpublishRoute,
  putWorkspacesWorkspaceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
  .openapi(postWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceIdImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
