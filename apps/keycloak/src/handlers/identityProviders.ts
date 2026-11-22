import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute,
  deleteAdminRealmsRealmIdentityProviderInstancesAliasRoute,
  getAdminRealmsRealmIdentityProviderInstancesAliasExportRoute,
  getAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissionsRoute,
  getAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute,
  getAdminRealmsRealmIdentityProviderInstancesAliasMappersRoute,
  getAdminRealmsRealmIdentityProviderInstancesAliasMapperTypesRoute,
  getAdminRealmsRealmIdentityProviderInstancesAliasReloadKeysRoute,
  getAdminRealmsRealmIdentityProviderInstancesAliasRoute,
  getAdminRealmsRealmIdentityProviderInstancesRoute,
  getAdminRealmsRealmIdentityProviderProvidersProviderIdRoute,
  postAdminRealmsRealmIdentityProviderImportConfigRoute,
  postAdminRealmsRealmIdentityProviderInstancesAliasMappersRoute,
  postAdminRealmsRealmIdentityProviderInstancesRoute,
  putAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissionsRoute,
  putAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute,
  putAdminRealmsRealmIdentityProviderInstancesAliasRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityProvidersHandler = app
  .openapi(postAdminRealmsRealmIdentityProviderImportConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmIdentityProviderInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderInstancesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmIdentityProviderInstancesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmIdentityProviderInstancesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderInstancesAliasExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderInstancesAliasMapperTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderInstancesAliasMappersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmIdentityProviderInstancesAliasMappersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderInstancesAliasReloadKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
