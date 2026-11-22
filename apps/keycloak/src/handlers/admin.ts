import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute,
  deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionProvidersRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionSearchRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyProvidersRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicySearchRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdAttributesRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdPermissionsRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdScopesRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceSearchRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdPermissionsRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdResourcesRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeSearchRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerSettingsRoute,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerImportRoute,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionEvaluateRoute,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionRoute,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyEvaluateRoute,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyRoute,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceRoute,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeRoute,
  putAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute,
  putAdminRealmsRealmClientsClientUuidAuthzResourceServerRoute,
  putAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidAuthzResourceServerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidAuthzResourceServerImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdAttributesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdPermissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdScopesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdPermissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
