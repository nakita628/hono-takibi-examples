import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersFolderIdRoute,
  getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudStorageHandler = app
  .openapi(getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
