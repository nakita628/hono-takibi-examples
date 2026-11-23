import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountCredentialsCredentialIdRoute,
  deleteAccountGroupsGroupIdRoute,
  deleteAccountKeysKeyIdRoute,
  deleteAccountOrgsOrgIdExportTokenRoute,
  deleteAccountOrgsOrgIdRoute,
  deleteAccountSsoGroupsGroupMappingIdRoute,
  deleteAccountTasksTemplatesScanTemplateIdRoute,
  deleteAccountUsersUserIdRoute,
  getAccountAgentsRoute,
  getAccountCredentialsCredentialIdRoute,
  getAccountCredentialsRoute,
  getAccountEventsJsonlRoute,
  getAccountEventsJsonRoute,
  getAccountGroupsGroupIdRoute,
  getAccountGroupsRoute,
  getAccountKeysKeyIdRoute,
  getAccountKeysRoute,
  getAccountLicenseRoute,
  getAccountOrgsOrgIdRoute,
  getAccountOrgsRoute,
  getAccountSitesRoute,
  getAccountSsoGroupsGroupMappingIdRoute,
  getAccountSsoGroupsRoute,
  getAccountTasksRoute,
  getAccountTasksTemplatesRoute,
  getAccountTasksTemplatesScanTemplateIdRoute,
  getAccountUsersRoute,
  getAccountUsersUserIdRoute,
  patchAccountKeysKeyIdRotateRoute,
  patchAccountOrgsOrgIdExportTokenRotateRoute,
  patchAccountOrgsOrgIdRoute,
  patchAccountUsersUserIdResetLockoutRoute,
  patchAccountUsersUserIdResetMFARoute,
  patchAccountUsersUserIdResetPasswordRoute,
  patchAccountUsersUserIdRoute,
  postAccountGroupsRoute,
  postAccountSsoGroupsRoute,
  postAccountTasksTemplatesRoute,
  putAccountCredentialsRoute,
  putAccountGroupsRoute,
  putAccountKeysRoute,
  putAccountOrgsRoute,
  putAccountSsoGroupsRoute,
  putAccountTasksTemplatesRoute,
  putAccountUsersInviteRoute,
  putAccountUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getAccountAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountEventsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountEventsJsonlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountKeysKeyIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountOrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrgsOrgIdExportTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountOrgsOrgIdExportTokenRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountSsoGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountSsoGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountSsoGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountSsoGroupsGroupMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountSsoGroupsGroupMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountTasksTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountTasksTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountTasksTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountTasksTemplatesScanTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountTasksTemplatesScanTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountUsersInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountUsersUserIdResetLockoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountUsersUserIdResetMFARoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountUsersUserIdResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
