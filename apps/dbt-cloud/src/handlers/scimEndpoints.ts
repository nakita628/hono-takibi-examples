import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdScimConfigTokensIdIndexRoute,
  deleteApiV3AccountsAccountIdScimV2GroupsGroupIdRoute,
  deleteApiV3AccountsAccountIdScimV2UsersUserIdRoute,
  getApiV3AccountsAccountIdScimConfigIndexRoute,
  getApiV3AccountsAccountIdScimConfigTokensIdIndexRoute,
  getApiV3AccountsAccountIdScimConfigTokensIndexRoute,
  getApiV3AccountsAccountIdScimV2GroupsGroupIdRoute,
  getApiV3AccountsAccountIdScimV2GroupsRoute,
  getApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeRoute,
  getApiV3AccountsAccountIdScimV2ResourceTypesRoute,
  getApiV3AccountsAccountIdScimV2SchemasRoute,
  getApiV3AccountsAccountIdScimV2SchemasSchemaUriRoute,
  getApiV3AccountsAccountIdScimV2ServiceProviderConfigRoute,
  getApiV3AccountsAccountIdScimV2UsersRoute,
  getApiV3AccountsAccountIdScimV2UsersUserIdRoute,
  patchApiV3AccountsAccountIdScimV2GroupsGroupIdRoute,
  patchApiV3AccountsAccountIdScimV2UsersUserIdRoute,
  postApiV3AccountsAccountIdScimConfigIndexRoute,
  postApiV3AccountsAccountIdScimConfigTokensIndexRoute,
  postApiV3AccountsAccountIdScimV2GroupsRoute,
  postApiV3AccountsAccountIdScimV2UsersRoute,
  putApiV3AccountsAccountIdScimV2GroupsGroupIdRoute,
  putApiV3AccountsAccountIdScimV2UsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scimEndpointsHandler = app
  .openapi(getApiV3AccountsAccountIdScimConfigIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdScimConfigIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimConfigTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdScimConfigTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimConfigTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdScimConfigTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdScimV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3AccountsAccountIdScimV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3AccountsAccountIdScimV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdScimV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2ResourceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2SchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2SchemasSchemaUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2ServiceProviderConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdScimV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3AccountsAccountIdScimV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3AccountsAccountIdScimV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdScimV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
