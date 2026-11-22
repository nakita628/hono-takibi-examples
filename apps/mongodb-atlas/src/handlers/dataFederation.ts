import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdDataFederationTenantNameLimitsLimitNameRoute,
  deleteApiAtlasV2GroupsGroupIdDataFederationTenantNameRoute,
  deleteApiAtlasV2GroupsGroupIdPrivateNetworkSettingsEndpointIdsEndpointIdRoute,
  getApiAtlasV2GroupsGroupIdDataFederationRoute,
  getApiAtlasV2GroupsGroupIdDataFederationTenantNameLimitsLimitNameRoute,
  getApiAtlasV2GroupsGroupIdDataFederationTenantNameLimitsRoute,
  getApiAtlasV2GroupsGroupIdDataFederationTenantNameQueryLogsGzRoute,
  getApiAtlasV2GroupsGroupIdDataFederationTenantNameRoute,
  getApiAtlasV2GroupsGroupIdPrivateNetworkSettingsEndpointIdsEndpointIdRoute,
  getApiAtlasV2GroupsGroupIdPrivateNetworkSettingsEndpointIdsRoute,
  patchApiAtlasV2GroupsGroupIdDataFederationTenantNameLimitsLimitNameRoute,
  patchApiAtlasV2GroupsGroupIdDataFederationTenantNameRoute,
  postApiAtlasV2GroupsGroupIdDataFederationRoute,
  postApiAtlasV2GroupsGroupIdPrivateNetworkSettingsEndpointIdsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataFederationHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdDataFederationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdDataFederationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdDataFederationTenantNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdDataFederationTenantNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdDataFederationTenantNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdDataFederationTenantNameLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdDataFederationTenantNameLimitsLimitNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdDataFederationTenantNameLimitsLimitNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdDataFederationTenantNameLimitsLimitNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdDataFederationTenantNameQueryLogsGzRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdPrivateNetworkSettingsEndpointIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdPrivateNetworkSettingsEndpointIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdPrivateNetworkSettingsEndpointIdsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdPrivateNetworkSettingsEndpointIdsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
