import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdEncryptionAtRestCloudProviderPrivateEndpointsEndpointIdRoute,
  getApiAtlasV2GroupsGroupIdEncryptionAtRestCloudProviderPrivateEndpointsEndpointIdRoute,
  getApiAtlasV2GroupsGroupIdEncryptionAtRestCloudProviderPrivateEndpointsRoute,
  getApiAtlasV2GroupsGroupIdEncryptionAtRestRoute,
  patchApiAtlasV2GroupsGroupIdEncryptionAtRestRoute,
  postApiAtlasV2GroupsGroupIdEncryptionAtRestCloudProviderPrivateEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const encryptionAtRestUsingCustomerKeyManagementHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdEncryptionAtRestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdEncryptionAtRestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdEncryptionAtRestCloudProviderPrivateEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdEncryptionAtRestCloudProviderPrivateEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiAtlasV2GroupsGroupIdEncryptionAtRestCloudProviderPrivateEndpointsEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdEncryptionAtRestCloudProviderPrivateEndpointsEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
