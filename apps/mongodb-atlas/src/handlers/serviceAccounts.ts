import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdServiceAccountsClientIdAccessListIpAddressRoute,
  deleteApiAtlasV2GroupsGroupIdServiceAccountsClientIdRoute,
  deleteApiAtlasV2GroupsGroupIdServiceAccountsClientIdSecretsSecretIdRoute,
  deleteApiAtlasV2OrgsOrgIdServiceAccountsClientIdAccessListIpAddressRoute,
  deleteApiAtlasV2OrgsOrgIdServiceAccountsClientIdRoute,
  deleteApiAtlasV2OrgsOrgIdServiceAccountsClientIdSecretsSecretIdRoute,
  getApiAtlasV2GroupsGroupIdServiceAccountsClientIdAccessListRoute,
  getApiAtlasV2GroupsGroupIdServiceAccountsClientIdRoute,
  getApiAtlasV2GroupsGroupIdServiceAccountsRoute,
  getApiAtlasV2OrgsOrgIdServiceAccountsClientIdAccessListRoute,
  getApiAtlasV2OrgsOrgIdServiceAccountsClientIdGroupsRoute,
  getApiAtlasV2OrgsOrgIdServiceAccountsClientIdRoute,
  getApiAtlasV2OrgsOrgIdServiceAccountsRoute,
  patchApiAtlasV2GroupsGroupIdServiceAccountsClientIdRoute,
  patchApiAtlasV2OrgsOrgIdServiceAccountsClientIdRoute,
  postApiAtlasV2GroupsGroupIdServiceAccountsClientIdAccessListRoute,
  postApiAtlasV2GroupsGroupIdServiceAccountsClientIdInviteRoute,
  postApiAtlasV2GroupsGroupIdServiceAccountsClientIdSecretsRoute,
  postApiAtlasV2GroupsGroupIdServiceAccountsRoute,
  postApiAtlasV2OrgsOrgIdServiceAccountsClientIdAccessListRoute,
  postApiAtlasV2OrgsOrgIdServiceAccountsClientIdSecretsRoute,
  postApiAtlasV2OrgsOrgIdServiceAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceAccountsHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdServiceAccountsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdServiceAccountsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdServiceAccountsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdServiceAccountsClientIdAccessListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdServiceAccountsClientIdAccessListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdServiceAccountsClientIdAccessListIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdServiceAccountsClientIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdServiceAccountsClientIdSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdServiceAccountsClientIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2OrgsOrgIdServiceAccountsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdServiceAccountsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2OrgsOrgIdServiceAccountsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdServiceAccountsClientIdAccessListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdServiceAccountsClientIdAccessListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2OrgsOrgIdServiceAccountsClientIdAccessListIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdServiceAccountsClientIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdServiceAccountsClientIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2OrgsOrgIdServiceAccountsClientIdSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
