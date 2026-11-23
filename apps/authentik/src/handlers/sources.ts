import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSourcesAllSlugIndexRoute,
  deleteSourcesGroupConnectionsAllIdIndexRoute,
  deleteSourcesGroupConnectionsKerberosIdIndexRoute,
  deleteSourcesGroupConnectionsLdapIdIndexRoute,
  deleteSourcesGroupConnectionsOauthIdIndexRoute,
  deleteSourcesGroupConnectionsPlexIdIndexRoute,
  deleteSourcesGroupConnectionsSamlIdIndexRoute,
  deleteSourcesGroupConnectionsTelegramIdIndexRoute,
  deleteSourcesKerberosSlugIndexRoute,
  deleteSourcesLdapSlugIndexRoute,
  deleteSourcesOauthSlugIndexRoute,
  deleteSourcesPlexSlugIndexRoute,
  deleteSourcesSamlSlugIndexRoute,
  deleteSourcesScimGroupsIdIndexRoute,
  deleteSourcesScimSlugIndexRoute,
  deleteSourcesScimUsersIdIndexRoute,
  deleteSourcesTelegramSlugIndexRoute,
  deleteSourcesUserConnectionsAllIdIndexRoute,
  deleteSourcesUserConnectionsKerberosIdIndexRoute,
  deleteSourcesUserConnectionsLdapIdIndexRoute,
  deleteSourcesUserConnectionsOauthIdIndexRoute,
  deleteSourcesUserConnectionsPlexIdIndexRoute,
  deleteSourcesUserConnectionsSamlIdIndexRoute,
  deleteSourcesUserConnectionsTelegramIdIndexRoute,
  getSourcesAllIndexRoute,
  getSourcesAllSlugIndexRoute,
  getSourcesAllSlugUsedByIndexRoute,
  getSourcesAllTypesIndexRoute,
  getSourcesAllUserSettingsIndexRoute,
  getSourcesGroupConnectionsAllIdIndexRoute,
  getSourcesGroupConnectionsAllIdUsedByIndexRoute,
  getSourcesGroupConnectionsAllIndexRoute,
  getSourcesGroupConnectionsKerberosIdIndexRoute,
  getSourcesGroupConnectionsKerberosIdUsedByIndexRoute,
  getSourcesGroupConnectionsKerberosIndexRoute,
  getSourcesGroupConnectionsLdapIdIndexRoute,
  getSourcesGroupConnectionsLdapIdUsedByIndexRoute,
  getSourcesGroupConnectionsLdapIndexRoute,
  getSourcesGroupConnectionsOauthIdIndexRoute,
  getSourcesGroupConnectionsOauthIdUsedByIndexRoute,
  getSourcesGroupConnectionsOauthIndexRoute,
  getSourcesGroupConnectionsPlexIdIndexRoute,
  getSourcesGroupConnectionsPlexIdUsedByIndexRoute,
  getSourcesGroupConnectionsPlexIndexRoute,
  getSourcesGroupConnectionsSamlIdIndexRoute,
  getSourcesGroupConnectionsSamlIdUsedByIndexRoute,
  getSourcesGroupConnectionsSamlIndexRoute,
  getSourcesGroupConnectionsTelegramIdIndexRoute,
  getSourcesGroupConnectionsTelegramIdUsedByIndexRoute,
  getSourcesGroupConnectionsTelegramIndexRoute,
  getSourcesKerberosIndexRoute,
  getSourcesKerberosSlugIndexRoute,
  getSourcesKerberosSlugSyncStatusIndexRoute,
  getSourcesKerberosSlugUsedByIndexRoute,
  getSourcesLdapIndexRoute,
  getSourcesLdapSlugDebugIndexRoute,
  getSourcesLdapSlugIndexRoute,
  getSourcesLdapSlugSyncStatusIndexRoute,
  getSourcesLdapSlugUsedByIndexRoute,
  getSourcesOauthIndexRoute,
  getSourcesOauthSlugIndexRoute,
  getSourcesOauthSlugUsedByIndexRoute,
  getSourcesOauthSourceTypesIndexRoute,
  getSourcesPlexIndexRoute,
  getSourcesPlexSlugIndexRoute,
  getSourcesPlexSlugUsedByIndexRoute,
  getSourcesSamlIndexRoute,
  getSourcesSamlSlugIndexRoute,
  getSourcesSamlSlugMetadataIndexRoute,
  getSourcesSamlSlugUsedByIndexRoute,
  getSourcesScimGroupsIdIndexRoute,
  getSourcesScimGroupsIdUsedByIndexRoute,
  getSourcesScimGroupsIndexRoute,
  getSourcesScimIndexRoute,
  getSourcesScimSlugIndexRoute,
  getSourcesScimSlugUsedByIndexRoute,
  getSourcesScimUsersIdIndexRoute,
  getSourcesScimUsersIdUsedByIndexRoute,
  getSourcesScimUsersIndexRoute,
  getSourcesTelegramIndexRoute,
  getSourcesTelegramSlugIndexRoute,
  getSourcesTelegramSlugUsedByIndexRoute,
  getSourcesUserConnectionsAllIdIndexRoute,
  getSourcesUserConnectionsAllIdUsedByIndexRoute,
  getSourcesUserConnectionsAllIndexRoute,
  getSourcesUserConnectionsKerberosIdIndexRoute,
  getSourcesUserConnectionsKerberosIdUsedByIndexRoute,
  getSourcesUserConnectionsKerberosIndexRoute,
  getSourcesUserConnectionsLdapIdIndexRoute,
  getSourcesUserConnectionsLdapIdUsedByIndexRoute,
  getSourcesUserConnectionsLdapIndexRoute,
  getSourcesUserConnectionsOauthIdIndexRoute,
  getSourcesUserConnectionsOauthIdUsedByIndexRoute,
  getSourcesUserConnectionsOauthIndexRoute,
  getSourcesUserConnectionsPlexIdIndexRoute,
  getSourcesUserConnectionsPlexIdUsedByIndexRoute,
  getSourcesUserConnectionsPlexIndexRoute,
  getSourcesUserConnectionsSamlIdIndexRoute,
  getSourcesUserConnectionsSamlIdUsedByIndexRoute,
  getSourcesUserConnectionsSamlIndexRoute,
  getSourcesUserConnectionsTelegramIdIndexRoute,
  getSourcesUserConnectionsTelegramIdUsedByIndexRoute,
  getSourcesUserConnectionsTelegramIndexRoute,
  patchSourcesGroupConnectionsAllIdIndexRoute,
  patchSourcesGroupConnectionsKerberosIdIndexRoute,
  patchSourcesGroupConnectionsLdapIdIndexRoute,
  patchSourcesGroupConnectionsOauthIdIndexRoute,
  patchSourcesGroupConnectionsPlexIdIndexRoute,
  patchSourcesGroupConnectionsSamlIdIndexRoute,
  patchSourcesGroupConnectionsTelegramIdIndexRoute,
  patchSourcesKerberosSlugIndexRoute,
  patchSourcesLdapSlugIndexRoute,
  patchSourcesOauthSlugIndexRoute,
  patchSourcesPlexSlugIndexRoute,
  patchSourcesSamlSlugIndexRoute,
  patchSourcesScimGroupsIdIndexRoute,
  patchSourcesScimSlugIndexRoute,
  patchSourcesScimUsersIdIndexRoute,
  patchSourcesTelegramSlugIndexRoute,
  patchSourcesUserConnectionsAllIdIndexRoute,
  patchSourcesUserConnectionsKerberosIdIndexRoute,
  patchSourcesUserConnectionsLdapIdIndexRoute,
  patchSourcesUserConnectionsOauthIdIndexRoute,
  patchSourcesUserConnectionsPlexIdIndexRoute,
  patchSourcesUserConnectionsSamlIdIndexRoute,
  patchSourcesUserConnectionsTelegramIdIndexRoute,
  postSourcesGroupConnectionsKerberosIndexRoute,
  postSourcesGroupConnectionsLdapIndexRoute,
  postSourcesGroupConnectionsOauthIndexRoute,
  postSourcesGroupConnectionsPlexIndexRoute,
  postSourcesGroupConnectionsSamlIndexRoute,
  postSourcesGroupConnectionsTelegramIndexRoute,
  postSourcesKerberosIndexRoute,
  postSourcesLdapIndexRoute,
  postSourcesOauthIndexRoute,
  postSourcesPlexIndexRoute,
  postSourcesPlexRedeemTokenAuthenticatedIndexRoute,
  postSourcesPlexRedeemTokenIndexRoute,
  postSourcesSamlIndexRoute,
  postSourcesScimGroupsIndexRoute,
  postSourcesScimIndexRoute,
  postSourcesScimUsersIndexRoute,
  postSourcesTelegramIndexRoute,
  postSourcesTelegramSlugConnectUserIndexRoute,
  postSourcesUserConnectionsKerberosIndexRoute,
  postSourcesUserConnectionsLdapIndexRoute,
  postSourcesUserConnectionsOauthIndexRoute,
  postSourcesUserConnectionsPlexIndexRoute,
  postSourcesUserConnectionsSamlIndexRoute,
  postSourcesUserConnectionsTelegramIndexRoute,
  putSourcesGroupConnectionsAllIdIndexRoute,
  putSourcesGroupConnectionsKerberosIdIndexRoute,
  putSourcesGroupConnectionsLdapIdIndexRoute,
  putSourcesGroupConnectionsOauthIdIndexRoute,
  putSourcesGroupConnectionsPlexIdIndexRoute,
  putSourcesGroupConnectionsSamlIdIndexRoute,
  putSourcesGroupConnectionsTelegramIdIndexRoute,
  putSourcesKerberosSlugIndexRoute,
  putSourcesLdapSlugIndexRoute,
  putSourcesOauthSlugIndexRoute,
  putSourcesPlexSlugIndexRoute,
  putSourcesSamlSlugIndexRoute,
  putSourcesScimGroupsIdIndexRoute,
  putSourcesScimSlugIndexRoute,
  putSourcesScimUsersIdIndexRoute,
  putSourcesTelegramSlugIndexRoute,
  putSourcesUserConnectionsAllIdIndexRoute,
  putSourcesUserConnectionsKerberosIdIndexRoute,
  putSourcesUserConnectionsLdapIdIndexRoute,
  putSourcesUserConnectionsOauthIdIndexRoute,
  putSourcesUserConnectionsPlexIdIndexRoute,
  putSourcesUserConnectionsSamlIdIndexRoute,
  putSourcesUserConnectionsTelegramIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourcesHandler = app
  .openapi(getSourcesAllIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesAllSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesAllSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesAllSlugUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesAllTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesAllUserSettingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsAllIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsAllIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesGroupConnectionsAllIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesGroupConnectionsAllIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesGroupConnectionsAllIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsAllIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsKerberosIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesGroupConnectionsKerberosIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsKerberosIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesGroupConnectionsKerberosIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesGroupConnectionsKerberosIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesGroupConnectionsKerberosIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsKerberosIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsLdapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesGroupConnectionsLdapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsLdapIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesGroupConnectionsLdapIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesGroupConnectionsLdapIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesGroupConnectionsLdapIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsLdapIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsOauthIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesGroupConnectionsOauthIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsOauthIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesGroupConnectionsOauthIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesGroupConnectionsOauthIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesGroupConnectionsOauthIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsOauthIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsPlexIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesGroupConnectionsPlexIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsPlexIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesGroupConnectionsPlexIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesGroupConnectionsPlexIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesGroupConnectionsPlexIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsPlexIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsSamlIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesGroupConnectionsSamlIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsSamlIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesGroupConnectionsSamlIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesGroupConnectionsSamlIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesGroupConnectionsSamlIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsSamlIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsTelegramIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesGroupConnectionsTelegramIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsTelegramIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesGroupConnectionsTelegramIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesGroupConnectionsTelegramIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesGroupConnectionsTelegramIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesGroupConnectionsTelegramIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesKerberosIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesKerberosIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesKerberosSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesKerberosSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesKerberosSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesKerberosSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesKerberosSlugSyncStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesKerberosSlugUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesLdapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesLdapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesLdapSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesLdapSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesLdapSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesLdapSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesLdapSlugDebugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesLdapSlugSyncStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesLdapSlugUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesOauthIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesOauthIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesOauthSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesOauthSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesOauthSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesOauthSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesOauthSlugUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesOauthSourceTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesPlexIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesPlexIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesPlexSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesPlexSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesPlexSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesPlexSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesPlexSlugUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesPlexRedeemTokenIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesPlexRedeemTokenAuthenticatedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesSamlIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesSamlIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesSamlSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesSamlSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesSamlSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesSamlSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesSamlSlugMetadataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesSamlSlugUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesScimIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesScimIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesScimSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesScimSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesScimSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesScimSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesScimSlugUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesScimGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesScimGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesScimGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesScimGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesScimGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesScimGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesScimGroupsIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesScimUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesScimUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesScimUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesScimUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesScimUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesScimUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesScimUsersIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesTelegramIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesTelegramIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesTelegramSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesTelegramSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesTelegramSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesTelegramSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesTelegramSlugConnectUserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesTelegramSlugUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsAllIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsAllIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesUserConnectionsAllIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesUserConnectionsAllIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesUserConnectionsAllIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsAllIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsKerberosIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesUserConnectionsKerberosIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsKerberosIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesUserConnectionsKerberosIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesUserConnectionsKerberosIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesUserConnectionsKerberosIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsKerberosIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsLdapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesUserConnectionsLdapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsLdapIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesUserConnectionsLdapIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesUserConnectionsLdapIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesUserConnectionsLdapIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsLdapIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsOauthIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesUserConnectionsOauthIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsOauthIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesUserConnectionsOauthIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesUserConnectionsOauthIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesUserConnectionsOauthIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsOauthIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsPlexIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesUserConnectionsPlexIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsPlexIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesUserConnectionsPlexIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesUserConnectionsPlexIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesUserConnectionsPlexIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsPlexIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsSamlIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesUserConnectionsSamlIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsSamlIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesUserConnectionsSamlIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesUserConnectionsSamlIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesUserConnectionsSamlIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsSamlIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsTelegramIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourcesUserConnectionsTelegramIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsTelegramIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourcesUserConnectionsTelegramIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesUserConnectionsTelegramIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesUserConnectionsTelegramIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesUserConnectionsTelegramIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
