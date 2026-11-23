import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getSourcesAllIndexRouteHandler: RouteHandler<typeof getSourcesAllIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSourcesAllSlugIndexRouteHandler: RouteHandler<
  typeof getSourcesAllSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesAllSlugIndexRouteHandler: RouteHandler<
  typeof deleteSourcesAllSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesAllSlugUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesAllSlugUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesAllTypesIndexRouteHandler: RouteHandler<
  typeof getSourcesAllTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesAllUserSettingsIndexRouteHandler: RouteHandler<
  typeof getSourcesAllUserSettingsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsAllIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsAllIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsAllIdIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsAllIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesGroupConnectionsAllIdIndexRouteHandler: RouteHandler<
  typeof putSourcesGroupConnectionsAllIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesGroupConnectionsAllIdIndexRouteHandler: RouteHandler<
  typeof patchSourcesGroupConnectionsAllIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesGroupConnectionsAllIdIndexRouteHandler: RouteHandler<
  typeof deleteSourcesGroupConnectionsAllIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsAllIdUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsAllIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsKerberosIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsKerberosIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesGroupConnectionsKerberosIndexRouteHandler: RouteHandler<
  typeof postSourcesGroupConnectionsKerberosIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsKerberosIdIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsKerberosIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesGroupConnectionsKerberosIdIndexRouteHandler: RouteHandler<
  typeof putSourcesGroupConnectionsKerberosIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesGroupConnectionsKerberosIdIndexRouteHandler: RouteHandler<
  typeof patchSourcesGroupConnectionsKerberosIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesGroupConnectionsKerberosIdIndexRouteHandler: RouteHandler<
  typeof deleteSourcesGroupConnectionsKerberosIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsKerberosIdUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsKerberosIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsLdapIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsLdapIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesGroupConnectionsLdapIndexRouteHandler: RouteHandler<
  typeof postSourcesGroupConnectionsLdapIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsLdapIdIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsLdapIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesGroupConnectionsLdapIdIndexRouteHandler: RouteHandler<
  typeof putSourcesGroupConnectionsLdapIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesGroupConnectionsLdapIdIndexRouteHandler: RouteHandler<
  typeof patchSourcesGroupConnectionsLdapIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesGroupConnectionsLdapIdIndexRouteHandler: RouteHandler<
  typeof deleteSourcesGroupConnectionsLdapIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsLdapIdUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsLdapIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsOauthIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsOauthIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesGroupConnectionsOauthIndexRouteHandler: RouteHandler<
  typeof postSourcesGroupConnectionsOauthIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsOauthIdIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsOauthIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesGroupConnectionsOauthIdIndexRouteHandler: RouteHandler<
  typeof putSourcesGroupConnectionsOauthIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesGroupConnectionsOauthIdIndexRouteHandler: RouteHandler<
  typeof patchSourcesGroupConnectionsOauthIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesGroupConnectionsOauthIdIndexRouteHandler: RouteHandler<
  typeof deleteSourcesGroupConnectionsOauthIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsOauthIdUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsOauthIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsPlexIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsPlexIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesGroupConnectionsPlexIndexRouteHandler: RouteHandler<
  typeof postSourcesGroupConnectionsPlexIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsPlexIdIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsPlexIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesGroupConnectionsPlexIdIndexRouteHandler: RouteHandler<
  typeof putSourcesGroupConnectionsPlexIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesGroupConnectionsPlexIdIndexRouteHandler: RouteHandler<
  typeof patchSourcesGroupConnectionsPlexIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesGroupConnectionsPlexIdIndexRouteHandler: RouteHandler<
  typeof deleteSourcesGroupConnectionsPlexIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsPlexIdUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsPlexIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsSamlIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsSamlIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesGroupConnectionsSamlIndexRouteHandler: RouteHandler<
  typeof postSourcesGroupConnectionsSamlIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsSamlIdIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsSamlIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesGroupConnectionsSamlIdIndexRouteHandler: RouteHandler<
  typeof putSourcesGroupConnectionsSamlIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesGroupConnectionsSamlIdIndexRouteHandler: RouteHandler<
  typeof patchSourcesGroupConnectionsSamlIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesGroupConnectionsSamlIdIndexRouteHandler: RouteHandler<
  typeof deleteSourcesGroupConnectionsSamlIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsSamlIdUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsSamlIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsTelegramIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsTelegramIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesGroupConnectionsTelegramIndexRouteHandler: RouteHandler<
  typeof postSourcesGroupConnectionsTelegramIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsTelegramIdIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsTelegramIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesGroupConnectionsTelegramIdIndexRouteHandler: RouteHandler<
  typeof putSourcesGroupConnectionsTelegramIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesGroupConnectionsTelegramIdIndexRouteHandler: RouteHandler<
  typeof patchSourcesGroupConnectionsTelegramIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesGroupConnectionsTelegramIdIndexRouteHandler: RouteHandler<
  typeof deleteSourcesGroupConnectionsTelegramIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesGroupConnectionsTelegramIdUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesGroupConnectionsTelegramIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesKerberosIndexRouteHandler: RouteHandler<
  typeof getSourcesKerberosIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesKerberosIndexRouteHandler: RouteHandler<
  typeof postSourcesKerberosIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesKerberosSlugIndexRouteHandler: RouteHandler<
  typeof getSourcesKerberosSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesKerberosSlugIndexRouteHandler: RouteHandler<
  typeof putSourcesKerberosSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesKerberosSlugIndexRouteHandler: RouteHandler<
  typeof patchSourcesKerberosSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesKerberosSlugIndexRouteHandler: RouteHandler<
  typeof deleteSourcesKerberosSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesKerberosSlugSyncStatusIndexRouteHandler: RouteHandler<
  typeof getSourcesKerberosSlugSyncStatusIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesKerberosSlugUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesKerberosSlugUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesLdapIndexRouteHandler: RouteHandler<
  typeof getSourcesLdapIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesLdapIndexRouteHandler: RouteHandler<
  typeof postSourcesLdapIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesLdapSlugIndexRouteHandler: RouteHandler<
  typeof getSourcesLdapSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesLdapSlugIndexRouteHandler: RouteHandler<
  typeof putSourcesLdapSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesLdapSlugIndexRouteHandler: RouteHandler<
  typeof patchSourcesLdapSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesLdapSlugIndexRouteHandler: RouteHandler<
  typeof deleteSourcesLdapSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesLdapSlugDebugIndexRouteHandler: RouteHandler<
  typeof getSourcesLdapSlugDebugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesLdapSlugSyncStatusIndexRouteHandler: RouteHandler<
  typeof getSourcesLdapSlugSyncStatusIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesLdapSlugUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesLdapSlugUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesOauthIndexRouteHandler: RouteHandler<
  typeof getSourcesOauthIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesOauthIndexRouteHandler: RouteHandler<
  typeof postSourcesOauthIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesOauthSlugIndexRouteHandler: RouteHandler<
  typeof getSourcesOauthSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesOauthSlugIndexRouteHandler: RouteHandler<
  typeof putSourcesOauthSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesOauthSlugIndexRouteHandler: RouteHandler<
  typeof patchSourcesOauthSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesOauthSlugIndexRouteHandler: RouteHandler<
  typeof deleteSourcesOauthSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesOauthSlugUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesOauthSlugUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesOauthSourceTypesIndexRouteHandler: RouteHandler<
  typeof getSourcesOauthSourceTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesPlexIndexRouteHandler: RouteHandler<
  typeof getSourcesPlexIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesPlexIndexRouteHandler: RouteHandler<
  typeof postSourcesPlexIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesPlexSlugIndexRouteHandler: RouteHandler<
  typeof getSourcesPlexSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesPlexSlugIndexRouteHandler: RouteHandler<
  typeof putSourcesPlexSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesPlexSlugIndexRouteHandler: RouteHandler<
  typeof patchSourcesPlexSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesPlexSlugIndexRouteHandler: RouteHandler<
  typeof deleteSourcesPlexSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesPlexSlugUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesPlexSlugUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesPlexRedeemTokenIndexRouteHandler: RouteHandler<
  typeof postSourcesPlexRedeemTokenIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesPlexRedeemTokenAuthenticatedIndexRouteHandler: RouteHandler<
  typeof postSourcesPlexRedeemTokenAuthenticatedIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesSamlIndexRouteHandler: RouteHandler<
  typeof getSourcesSamlIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesSamlIndexRouteHandler: RouteHandler<
  typeof postSourcesSamlIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesSamlSlugIndexRouteHandler: RouteHandler<
  typeof getSourcesSamlSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesSamlSlugIndexRouteHandler: RouteHandler<
  typeof putSourcesSamlSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesSamlSlugIndexRouteHandler: RouteHandler<
  typeof patchSourcesSamlSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesSamlSlugIndexRouteHandler: RouteHandler<
  typeof deleteSourcesSamlSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesSamlSlugMetadataIndexRouteHandler: RouteHandler<
  typeof getSourcesSamlSlugMetadataIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesSamlSlugUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesSamlSlugUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesScimIndexRouteHandler: RouteHandler<
  typeof getSourcesScimIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesScimIndexRouteHandler: RouteHandler<
  typeof postSourcesScimIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesScimSlugIndexRouteHandler: RouteHandler<
  typeof getSourcesScimSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesScimSlugIndexRouteHandler: RouteHandler<
  typeof putSourcesScimSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesScimSlugIndexRouteHandler: RouteHandler<
  typeof patchSourcesScimSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesScimSlugIndexRouteHandler: RouteHandler<
  typeof deleteSourcesScimSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesScimSlugUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesScimSlugUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesScimGroupsIndexRouteHandler: RouteHandler<
  typeof getSourcesScimGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesScimGroupsIndexRouteHandler: RouteHandler<
  typeof postSourcesScimGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesScimGroupsIdIndexRouteHandler: RouteHandler<
  typeof getSourcesScimGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesScimGroupsIdIndexRouteHandler: RouteHandler<
  typeof putSourcesScimGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesScimGroupsIdIndexRouteHandler: RouteHandler<
  typeof patchSourcesScimGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesScimGroupsIdIndexRouteHandler: RouteHandler<
  typeof deleteSourcesScimGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesScimGroupsIdUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesScimGroupsIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesScimUsersIndexRouteHandler: RouteHandler<
  typeof getSourcesScimUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesScimUsersIndexRouteHandler: RouteHandler<
  typeof postSourcesScimUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesScimUsersIdIndexRouteHandler: RouteHandler<
  typeof getSourcesScimUsersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesScimUsersIdIndexRouteHandler: RouteHandler<
  typeof putSourcesScimUsersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesScimUsersIdIndexRouteHandler: RouteHandler<
  typeof patchSourcesScimUsersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesScimUsersIdIndexRouteHandler: RouteHandler<
  typeof deleteSourcesScimUsersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesScimUsersIdUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesScimUsersIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesTelegramIndexRouteHandler: RouteHandler<
  typeof getSourcesTelegramIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesTelegramIndexRouteHandler: RouteHandler<
  typeof postSourcesTelegramIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesTelegramSlugIndexRouteHandler: RouteHandler<
  typeof getSourcesTelegramSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesTelegramSlugIndexRouteHandler: RouteHandler<
  typeof putSourcesTelegramSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesTelegramSlugIndexRouteHandler: RouteHandler<
  typeof patchSourcesTelegramSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesTelegramSlugIndexRouteHandler: RouteHandler<
  typeof deleteSourcesTelegramSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesTelegramSlugConnectUserIndexRouteHandler: RouteHandler<
  typeof postSourcesTelegramSlugConnectUserIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesTelegramSlugUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesTelegramSlugUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsAllIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsAllIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsAllIdIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsAllIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesUserConnectionsAllIdIndexRouteHandler: RouteHandler<
  typeof putSourcesUserConnectionsAllIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesUserConnectionsAllIdIndexRouteHandler: RouteHandler<
  typeof patchSourcesUserConnectionsAllIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesUserConnectionsAllIdIndexRouteHandler: RouteHandler<
  typeof deleteSourcesUserConnectionsAllIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsAllIdUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsAllIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsKerberosIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsKerberosIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesUserConnectionsKerberosIndexRouteHandler: RouteHandler<
  typeof postSourcesUserConnectionsKerberosIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsKerberosIdIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsKerberosIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesUserConnectionsKerberosIdIndexRouteHandler: RouteHandler<
  typeof putSourcesUserConnectionsKerberosIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesUserConnectionsKerberosIdIndexRouteHandler: RouteHandler<
  typeof patchSourcesUserConnectionsKerberosIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesUserConnectionsKerberosIdIndexRouteHandler: RouteHandler<
  typeof deleteSourcesUserConnectionsKerberosIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsKerberosIdUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsKerberosIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsLdapIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsLdapIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesUserConnectionsLdapIndexRouteHandler: RouteHandler<
  typeof postSourcesUserConnectionsLdapIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsLdapIdIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsLdapIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesUserConnectionsLdapIdIndexRouteHandler: RouteHandler<
  typeof putSourcesUserConnectionsLdapIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesUserConnectionsLdapIdIndexRouteHandler: RouteHandler<
  typeof patchSourcesUserConnectionsLdapIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesUserConnectionsLdapIdIndexRouteHandler: RouteHandler<
  typeof deleteSourcesUserConnectionsLdapIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsLdapIdUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsLdapIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsOauthIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsOauthIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesUserConnectionsOauthIndexRouteHandler: RouteHandler<
  typeof postSourcesUserConnectionsOauthIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsOauthIdIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsOauthIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesUserConnectionsOauthIdIndexRouteHandler: RouteHandler<
  typeof putSourcesUserConnectionsOauthIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesUserConnectionsOauthIdIndexRouteHandler: RouteHandler<
  typeof patchSourcesUserConnectionsOauthIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesUserConnectionsOauthIdIndexRouteHandler: RouteHandler<
  typeof deleteSourcesUserConnectionsOauthIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsOauthIdUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsOauthIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsPlexIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsPlexIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesUserConnectionsPlexIndexRouteHandler: RouteHandler<
  typeof postSourcesUserConnectionsPlexIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsPlexIdIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsPlexIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesUserConnectionsPlexIdIndexRouteHandler: RouteHandler<
  typeof putSourcesUserConnectionsPlexIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesUserConnectionsPlexIdIndexRouteHandler: RouteHandler<
  typeof patchSourcesUserConnectionsPlexIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesUserConnectionsPlexIdIndexRouteHandler: RouteHandler<
  typeof deleteSourcesUserConnectionsPlexIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsPlexIdUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsPlexIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsSamlIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsSamlIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesUserConnectionsSamlIndexRouteHandler: RouteHandler<
  typeof postSourcesUserConnectionsSamlIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsSamlIdIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsSamlIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesUserConnectionsSamlIdIndexRouteHandler: RouteHandler<
  typeof putSourcesUserConnectionsSamlIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesUserConnectionsSamlIdIndexRouteHandler: RouteHandler<
  typeof patchSourcesUserConnectionsSamlIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesUserConnectionsSamlIdIndexRouteHandler: RouteHandler<
  typeof deleteSourcesUserConnectionsSamlIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsSamlIdUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsSamlIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsTelegramIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsTelegramIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSourcesUserConnectionsTelegramIndexRouteHandler: RouteHandler<
  typeof postSourcesUserConnectionsTelegramIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsTelegramIdIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsTelegramIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSourcesUserConnectionsTelegramIdIndexRouteHandler: RouteHandler<
  typeof putSourcesUserConnectionsTelegramIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSourcesUserConnectionsTelegramIdIndexRouteHandler: RouteHandler<
  typeof patchSourcesUserConnectionsTelegramIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSourcesUserConnectionsTelegramIdIndexRouteHandler: RouteHandler<
  typeof deleteSourcesUserConnectionsTelegramIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSourcesUserConnectionsTelegramIdUsedByIndexRouteHandler: RouteHandler<
  typeof getSourcesUserConnectionsTelegramIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
