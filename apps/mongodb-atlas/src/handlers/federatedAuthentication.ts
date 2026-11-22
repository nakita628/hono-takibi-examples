import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoleMappingsIdRoute,
  deleteApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoute,
  deleteApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersIdentityProviderIdJwksRoute,
  deleteApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersIdentityProviderIdRoute,
  deleteApiAtlasV2FederationSettingsFederationSettingsIdRoute,
  getApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoleMappingsIdRoute,
  getApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoleMappingsRoute,
  getApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoute,
  getApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsRoute,
  getApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersIdentityProviderIdMetadataXmlRoute,
  getApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersIdentityProviderIdRoute,
  getApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersRoute,
  getApiAtlasV2OrgsOrgIdFederationSettingsRoute,
  patchApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoute,
  patchApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersIdentityProviderIdRoute,
  postApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoleMappingsRoute,
  postApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersRoute,
  putApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoleMappingsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const federatedAuthenticationHandler = app
  .openapi(deleteApiAtlasV2FederationSettingsFederationSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoleMappingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoleMappingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoleMappingsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoleMappingsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiAtlasV2FederationSettingsFederationSettingsIdConnectedOrgConfigsOrgIdRoleMappingsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersIdentityProviderIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersIdentityProviderIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersIdentityProviderIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersIdentityProviderIdJwksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2FederationSettingsFederationSettingsIdIdentityProvidersIdentityProviderIdMetadataXmlRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiAtlasV2OrgsOrgIdFederationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
