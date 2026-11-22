import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceEndpointServiceIdEndpointEndpointIdRoute,
  deleteApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceEndpointServiceIdRoute,
  getApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceEndpointServiceIdEndpointEndpointIdRoute,
  getApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceEndpointServiceIdRoute,
  getApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceRoute,
  getApiAtlasV2GroupsGroupIdPrivateEndpointRegionalModeRoute,
  patchApiAtlasV2GroupsGroupIdPrivateEndpointEndpointServiceEndpointServiceIdRoute,
  patchApiAtlasV2GroupsGroupIdPrivateEndpointRegionalModeRoute,
  postApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceEndpointServiceIdEndpointRoute,
  postApiAtlasV2GroupsGroupIdPrivateEndpointEndpointServiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const privateEndpointServicesHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceEndpointServiceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceEndpointServiceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceEndpointServiceIdEndpointRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceEndpointServiceIdEndpointEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdPrivateEndpointCloudProviderEndpointServiceEndpointServiceIdEndpointEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiAtlasV2GroupsGroupIdPrivateEndpointEndpointServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchApiAtlasV2GroupsGroupIdPrivateEndpointEndpointServiceEndpointServiceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiAtlasV2GroupsGroupIdPrivateEndpointRegionalModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdPrivateEndpointRegionalModeRoute, (c) => {
    throw new Error('Not implemented')
  })
