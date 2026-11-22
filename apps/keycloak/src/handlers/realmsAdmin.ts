import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmAdminEventsRoute,
  deleteAdminRealmsRealmDefaultDefaultClientScopesClientScopeIdRoute,
  deleteAdminRealmsRealmDefaultGroupsGroupIdRoute,
  deleteAdminRealmsRealmDefaultOptionalClientScopesClientScopeIdRoute,
  deleteAdminRealmsRealmEventsRoute,
  deleteAdminRealmsRealmLocalizationLocaleKeyRoute,
  deleteAdminRealmsRealmLocalizationLocaleRoute,
  deleteAdminRealmsRealmRoute,
  deleteAdminRealmsRealmSessionsSessionRoute,
  getAdminRealmsRealmAdminEventsRoute,
  getAdminRealmsRealmClientPoliciesPoliciesRoute,
  getAdminRealmsRealmClientPoliciesProfilesRoute,
  getAdminRealmsRealmClientSessionStatsRoute,
  getAdminRealmsRealmClientTypesRoute,
  getAdminRealmsRealmCredentialRegistratorsRoute,
  getAdminRealmsRealmDefaultDefaultClientScopesRoute,
  getAdminRealmsRealmDefaultGroupsRoute,
  getAdminRealmsRealmDefaultOptionalClientScopesRoute,
  getAdminRealmsRealmEventsConfigRoute,
  getAdminRealmsRealmEventsRoute,
  getAdminRealmsRealmGroupByPathPathRoute,
  getAdminRealmsRealmLocalizationLocaleKeyRoute,
  getAdminRealmsRealmLocalizationLocaleRoute,
  getAdminRealmsRealmLocalizationRoute,
  getAdminRealmsRealmRoute,
  getAdminRealmsRealmUsersManagementPermissionsRoute,
  getAdminRealmsRoute,
  postAdminRealmsRealmClientDescriptionConverterRoute,
  postAdminRealmsRealmLocalizationLocaleRoute,
  postAdminRealmsRealmLogoutAllRoute,
  postAdminRealmsRealmPartialExportRoute,
  postAdminRealmsRealmPartialImportRoute,
  postAdminRealmsRealmPushRevocationRoute,
  postAdminRealmsRealmTestSMTPConnectionRoute,
  postAdminRealmsRoute,
  putAdminRealmsRealmClientPoliciesPoliciesRoute,
  putAdminRealmsRealmClientPoliciesProfilesRoute,
  putAdminRealmsRealmClientTypesRoute,
  putAdminRealmsRealmDefaultDefaultClientScopesClientScopeIdRoute,
  putAdminRealmsRealmDefaultGroupsGroupIdRoute,
  putAdminRealmsRealmDefaultOptionalClientScopesClientScopeIdRoute,
  putAdminRealmsRealmEventsConfigRoute,
  putAdminRealmsRealmLocalizationLocaleKeyRoute,
  putAdminRealmsRealmRoute,
  putAdminRealmsRealmUsersManagementPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const realmsAdminHandler = app
  .openapi(getAdminRealmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAdminEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmAdminEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientDescriptionConverterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientPoliciesPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientPoliciesPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientPoliciesProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientPoliciesProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientSessionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmCredentialRegistratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmDefaultDefaultClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmDefaultDefaultClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmDefaultDefaultClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmDefaultGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmDefaultGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmDefaultGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmDefaultOptionalClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmDefaultOptionalClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmDefaultOptionalClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmEventsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmEventsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupByPathPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmLocalizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmLocalizationLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmLocalizationLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmLocalizationLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmLocalizationLocaleKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmLocalizationLocaleKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmLocalizationLocaleKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmLogoutAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmPartialExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmPartialImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmPushRevocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmSessionsSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmTestSMTPConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
