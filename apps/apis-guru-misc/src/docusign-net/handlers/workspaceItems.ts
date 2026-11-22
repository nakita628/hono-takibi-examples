import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdRoute,
  getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdPagesRoute,
  getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdRoute,
  getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdRoute,
  postV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesRoute,
  putV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspaceItemsHandler = app
  .openapi(deleteV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
