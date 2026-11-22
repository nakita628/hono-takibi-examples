import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmAdminEventsRoute,
  deleteRealmDefaultDefaultClientScopesClientScopeIdRoute,
  deleteRealmDefaultGroupsGroupIdRoute,
  deleteRealmDefaultOptionalClientScopesClientScopeIdRoute,
  deleteRealmEventsRoute,
  deleteRealmRoute,
  deleteRealmSessionsSessionRoute,
  getRealmAdminEventsRoute,
  getRealmClientSessionStatsRoute,
  getRealmCredentialRegistratorsRoute,
  getRealmDefaultDefaultClientScopesRoute,
  getRealmDefaultGroupsRoute,
  getRealmDefaultOptionalClientScopesRoute,
  getRealmEventsConfigRoute,
  getRealmEventsRoute,
  getRealmGroupByPathPathRoute,
  getRealmRoute,
  getRealmUsersManagementPermissionsRoute,
  postRealmClearKeysCacheRoute,
  postRealmClearRealmCacheRoute,
  postRealmClearUserCacheRoute,
  postRealmClientDescriptionConverterRoute,
  postRealmLogoutAllRoute,
  postRealmPartialExportRoute,
  postRealmPartialImportRoute,
  postRealmPushRevocationRoute,
  postRealmTestLDAPConnectionRoute,
  postRealmTestSMTPConnectionRoute,
  postRoute,
  putRealmDefaultDefaultClientScopesClientScopeIdRoute,
  putRealmDefaultGroupsGroupIdRoute,
  putRealmDefaultOptionalClientScopesClientScopeIdRoute,
  putRealmEventsConfigRoute,
  putRealmRoute,
  putRealmUsersManagementPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const realmsAdminHandler = app
  .openapi(postRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmAdminEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAdminEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClearKeysCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClearRealmCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClearUserCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientDescriptionConverterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientSessionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmCredentialRegistratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmDefaultDefaultClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmDefaultDefaultClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmDefaultDefaultClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmDefaultGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmDefaultGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmDefaultGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmDefaultOptionalClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmDefaultOptionalClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmDefaultOptionalClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmEventsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmEventsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupByPathPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmLogoutAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmPartialExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmPartialImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmPushRevocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmSessionsSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmTestLDAPConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmTestSMTPConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmUsersManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
