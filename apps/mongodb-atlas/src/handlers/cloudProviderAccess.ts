import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdCloudProviderAccessCloudProviderRoleIdRoute,
  getApiAtlasV2GroupsGroupIdCloudProviderAccessRoleIdRoute,
  getApiAtlasV2GroupsGroupIdCloudProviderAccessRoute,
  patchApiAtlasV2GroupsGroupIdCloudProviderAccessRoleIdRoute,
  postApiAtlasV2GroupsGroupIdCloudProviderAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudProviderAccessHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdCloudProviderAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdCloudProviderAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdCloudProviderAccessCloudProviderRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdCloudProviderAccessRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdCloudProviderAccessRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
