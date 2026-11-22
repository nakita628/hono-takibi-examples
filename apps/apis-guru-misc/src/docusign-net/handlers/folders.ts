import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV21AccountsAccountIdFoldersFolderIdRoute,
  getV21AccountsAccountIdFoldersRoute,
  getV21AccountsAccountIdSearchFoldersSearchFolderIdRoute,
  putV21AccountsAccountIdFoldersFolderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const foldersHandler = app
  .openapi(getV21AccountsAccountIdFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSearchFoldersSearchFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
