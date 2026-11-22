import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdUsersUserIdCloudStorageRoute,
  deleteV21AccountsAccountIdUsersUserIdCloudStorageServiceIdRoute,
  getV21AccountsAccountIdUsersUserIdCloudStorageRoute,
  getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdRoute,
  postV21AccountsAccountIdUsersUserIdCloudStorageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudStorageProvidersHandler = app
  .openapi(deleteV21AccountsAccountIdUsersUserIdCloudStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdCloudStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdUsersUserIdCloudStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdUsersUserIdCloudStorageServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
