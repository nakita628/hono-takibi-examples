import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkspacesDeleteWorkspaceRoute,
  getWorkspacesAllowedDomainAutoInviteRoute,
  getWorkspacesListAsSuperadminRoute,
  getWorkspacesListRoute,
  getWorkspacesUsersRoute,
  postWorkspacesCreateRoute,
  postWorkspacesExistsRoute,
  postWorkspacesExistsUsernameRoute,
  postWorkspacesSessionWorkspaceRetentionRoute,
  postWorkspacesSessionWorkspaceStatusRoute,
  postWorkspacesUnarchiveWorkspaceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
  .openapi(getWorkspacesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesAllowedDomainAutoInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesSessionWorkspaceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesSessionWorkspaceRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesListAsSuperadminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesExistsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesUnarchiveWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesDeleteWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
