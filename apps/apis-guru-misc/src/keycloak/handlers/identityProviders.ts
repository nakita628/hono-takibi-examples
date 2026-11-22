import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmIdentityProviderInstancesAliasMappersIdRoute,
  deleteRealmIdentityProviderInstancesAliasRoute,
  getRealmIdentityProviderInstancesAliasExportRoute,
  getRealmIdentityProviderInstancesAliasManagementPermissionsRoute,
  getRealmIdentityProviderInstancesAliasMappersIdRoute,
  getRealmIdentityProviderInstancesAliasMappersRoute,
  getRealmIdentityProviderInstancesAliasMapperTypesRoute,
  getRealmIdentityProviderInstancesAliasRoute,
  getRealmIdentityProviderInstancesRoute,
  getRealmIdentityProviderProvidersProviderIdRoute,
  postRealmIdentityProviderImportConfigRoute,
  postRealmIdentityProviderInstancesAliasMappersRoute,
  postRealmIdentityProviderInstancesRoute,
  putRealmIdentityProviderInstancesAliasManagementPermissionsRoute,
  putRealmIdentityProviderInstancesAliasMappersIdRoute,
  putRealmIdentityProviderInstancesAliasRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityProvidersHandler = app
  .openapi(postRealmIdentityProviderImportConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmIdentityProviderInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmIdentityProviderInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmIdentityProviderInstancesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmIdentityProviderInstancesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmIdentityProviderInstancesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmIdentityProviderInstancesAliasExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmIdentityProviderInstancesAliasManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmIdentityProviderInstancesAliasManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmIdentityProviderInstancesAliasMapperTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmIdentityProviderInstancesAliasMappersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmIdentityProviderInstancesAliasMappersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmIdentityProviderInstancesAliasMappersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmIdentityProviderInstancesAliasMappersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmIdentityProviderInstancesAliasMappersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmIdentityProviderProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
