import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdRoute,
  deleteApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdSecretsSecretIdRoute,
  deleteApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdRoute,
  deleteApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdSecretsSecretIdRoute,
  getApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdRoute,
  getApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdSecretsRoute,
  getApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdSecretsSecretIdRoute,
  getApiAtlasV2GroupsGroupIdMcpConfigsRoute,
  getApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdRoute,
  getApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdSecretsRoute,
  getApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdSecretsSecretIdRoute,
  getApiAtlasV2OrgsOrgIdMcpConfigsRoute,
  patchApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdRoute,
  patchApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdRoute,
  postApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdSecretsRoute,
  postApiAtlasV2GroupsGroupIdMcpConfigsRoute,
  postApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdSecretsRoute,
  postApiAtlasV2OrgsOrgIdMcpConfigsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const remoteMCPConfigurationsHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdMcpConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdMcpConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdMcpConfigsMcpConfigIdSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdMcpConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdMcpConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdMcpConfigsMcpConfigIdSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
