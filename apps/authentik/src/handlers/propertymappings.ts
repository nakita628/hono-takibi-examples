import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePropertymappingsAllPmUuidIndexRoute,
  deletePropertymappingsNotificationPmUuidIndexRoute,
  deletePropertymappingsProviderGoogleWorkspacePmUuidIndexRoute,
  deletePropertymappingsProviderMicrosoftEntraPmUuidIndexRoute,
  deletePropertymappingsProviderRacPmUuidIndexRoute,
  deletePropertymappingsProviderRadiusPmUuidIndexRoute,
  deletePropertymappingsProviderSamlPmUuidIndexRoute,
  deletePropertymappingsProviderScimPmUuidIndexRoute,
  deletePropertymappingsProviderScopePmUuidIndexRoute,
  deletePropertymappingsSourceKerberosPmUuidIndexRoute,
  deletePropertymappingsSourceLdapPmUuidIndexRoute,
  deletePropertymappingsSourceOauthPmUuidIndexRoute,
  deletePropertymappingsSourcePlexPmUuidIndexRoute,
  deletePropertymappingsSourceSamlPmUuidIndexRoute,
  deletePropertymappingsSourceScimPmUuidIndexRoute,
  deletePropertymappingsSourceTelegramPmUuidIndexRoute,
  getPropertymappingsAllIndexRoute,
  getPropertymappingsAllPmUuidIndexRoute,
  getPropertymappingsAllPmUuidUsedByIndexRoute,
  getPropertymappingsAllTypesIndexRoute,
  getPropertymappingsNotificationIndexRoute,
  getPropertymappingsNotificationPmUuidIndexRoute,
  getPropertymappingsNotificationPmUuidUsedByIndexRoute,
  getPropertymappingsProviderGoogleWorkspaceIndexRoute,
  getPropertymappingsProviderGoogleWorkspacePmUuidIndexRoute,
  getPropertymappingsProviderGoogleWorkspacePmUuidUsedByIndexRoute,
  getPropertymappingsProviderMicrosoftEntraIndexRoute,
  getPropertymappingsProviderMicrosoftEntraPmUuidIndexRoute,
  getPropertymappingsProviderMicrosoftEntraPmUuidUsedByIndexRoute,
  getPropertymappingsProviderRacIndexRoute,
  getPropertymappingsProviderRacPmUuidIndexRoute,
  getPropertymappingsProviderRacPmUuidUsedByIndexRoute,
  getPropertymappingsProviderRadiusIndexRoute,
  getPropertymappingsProviderRadiusPmUuidIndexRoute,
  getPropertymappingsProviderRadiusPmUuidUsedByIndexRoute,
  getPropertymappingsProviderSamlIndexRoute,
  getPropertymappingsProviderSamlPmUuidIndexRoute,
  getPropertymappingsProviderSamlPmUuidUsedByIndexRoute,
  getPropertymappingsProviderScimIndexRoute,
  getPropertymappingsProviderScimPmUuidIndexRoute,
  getPropertymappingsProviderScimPmUuidUsedByIndexRoute,
  getPropertymappingsProviderScopeIndexRoute,
  getPropertymappingsProviderScopePmUuidIndexRoute,
  getPropertymappingsProviderScopePmUuidUsedByIndexRoute,
  getPropertymappingsSourceKerberosIndexRoute,
  getPropertymappingsSourceKerberosPmUuidIndexRoute,
  getPropertymappingsSourceKerberosPmUuidUsedByIndexRoute,
  getPropertymappingsSourceLdapIndexRoute,
  getPropertymappingsSourceLdapPmUuidIndexRoute,
  getPropertymappingsSourceLdapPmUuidUsedByIndexRoute,
  getPropertymappingsSourceOauthIndexRoute,
  getPropertymappingsSourceOauthPmUuidIndexRoute,
  getPropertymappingsSourceOauthPmUuidUsedByIndexRoute,
  getPropertymappingsSourcePlexIndexRoute,
  getPropertymappingsSourcePlexPmUuidIndexRoute,
  getPropertymappingsSourcePlexPmUuidUsedByIndexRoute,
  getPropertymappingsSourceSamlIndexRoute,
  getPropertymappingsSourceSamlPmUuidIndexRoute,
  getPropertymappingsSourceSamlPmUuidUsedByIndexRoute,
  getPropertymappingsSourceScimIndexRoute,
  getPropertymappingsSourceScimPmUuidIndexRoute,
  getPropertymappingsSourceScimPmUuidUsedByIndexRoute,
  getPropertymappingsSourceTelegramIndexRoute,
  getPropertymappingsSourceTelegramPmUuidIndexRoute,
  getPropertymappingsSourceTelegramPmUuidUsedByIndexRoute,
  patchPropertymappingsNotificationPmUuidIndexRoute,
  patchPropertymappingsProviderGoogleWorkspacePmUuidIndexRoute,
  patchPropertymappingsProviderMicrosoftEntraPmUuidIndexRoute,
  patchPropertymappingsProviderRacPmUuidIndexRoute,
  patchPropertymappingsProviderRadiusPmUuidIndexRoute,
  patchPropertymappingsProviderSamlPmUuidIndexRoute,
  patchPropertymappingsProviderScimPmUuidIndexRoute,
  patchPropertymappingsProviderScopePmUuidIndexRoute,
  patchPropertymappingsSourceKerberosPmUuidIndexRoute,
  patchPropertymappingsSourceLdapPmUuidIndexRoute,
  patchPropertymappingsSourceOauthPmUuidIndexRoute,
  patchPropertymappingsSourcePlexPmUuidIndexRoute,
  patchPropertymappingsSourceSamlPmUuidIndexRoute,
  patchPropertymappingsSourceScimPmUuidIndexRoute,
  patchPropertymappingsSourceTelegramPmUuidIndexRoute,
  postPropertymappingsAllPmUuidTestIndexRoute,
  postPropertymappingsNotificationIndexRoute,
  postPropertymappingsProviderGoogleWorkspaceIndexRoute,
  postPropertymappingsProviderMicrosoftEntraIndexRoute,
  postPropertymappingsProviderRacIndexRoute,
  postPropertymappingsProviderRadiusIndexRoute,
  postPropertymappingsProviderSamlIndexRoute,
  postPropertymappingsProviderScimIndexRoute,
  postPropertymappingsProviderScopeIndexRoute,
  postPropertymappingsSourceKerberosIndexRoute,
  postPropertymappingsSourceLdapIndexRoute,
  postPropertymappingsSourceOauthIndexRoute,
  postPropertymappingsSourcePlexIndexRoute,
  postPropertymappingsSourceSamlIndexRoute,
  postPropertymappingsSourceScimIndexRoute,
  postPropertymappingsSourceTelegramIndexRoute,
  putPropertymappingsNotificationPmUuidIndexRoute,
  putPropertymappingsProviderGoogleWorkspacePmUuidIndexRoute,
  putPropertymappingsProviderMicrosoftEntraPmUuidIndexRoute,
  putPropertymappingsProviderRacPmUuidIndexRoute,
  putPropertymappingsProviderRadiusPmUuidIndexRoute,
  putPropertymappingsProviderSamlPmUuidIndexRoute,
  putPropertymappingsProviderScimPmUuidIndexRoute,
  putPropertymappingsProviderScopePmUuidIndexRoute,
  putPropertymappingsSourceKerberosPmUuidIndexRoute,
  putPropertymappingsSourceLdapPmUuidIndexRoute,
  putPropertymappingsSourceOauthPmUuidIndexRoute,
  putPropertymappingsSourcePlexPmUuidIndexRoute,
  putPropertymappingsSourceSamlPmUuidIndexRoute,
  putPropertymappingsSourceScimPmUuidIndexRoute,
  putPropertymappingsSourceTelegramPmUuidIndexRoute,
} from '../routes'

export const getPropertymappingsAllIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsAllIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsAllPmUuidIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsAllPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePropertymappingsAllPmUuidIndexRouteHandler: RouteHandler<
  typeof deletePropertymappingsAllPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertymappingsAllPmUuidTestIndexRouteHandler: RouteHandler<
  typeof postPropertymappingsAllPmUuidTestIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsAllPmUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsAllPmUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsAllTypesIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsAllTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsNotificationIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsNotificationIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertymappingsNotificationIndexRouteHandler: RouteHandler<
  typeof postPropertymappingsNotificationIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsNotificationPmUuidIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsNotificationPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPropertymappingsNotificationPmUuidIndexRouteHandler: RouteHandler<
  typeof putPropertymappingsNotificationPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPropertymappingsNotificationPmUuidIndexRouteHandler: RouteHandler<
  typeof patchPropertymappingsNotificationPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePropertymappingsNotificationPmUuidIndexRouteHandler: RouteHandler<
  typeof deletePropertymappingsNotificationPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsNotificationPmUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsNotificationPmUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderGoogleWorkspaceIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderGoogleWorkspaceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertymappingsProviderGoogleWorkspaceIndexRouteHandler: RouteHandler<
  typeof postPropertymappingsProviderGoogleWorkspaceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderGoogleWorkspacePmUuidIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderGoogleWorkspacePmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPropertymappingsProviderGoogleWorkspacePmUuidIndexRouteHandler: RouteHandler<
  typeof putPropertymappingsProviderGoogleWorkspacePmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPropertymappingsProviderGoogleWorkspacePmUuidIndexRouteHandler: RouteHandler<
  typeof patchPropertymappingsProviderGoogleWorkspacePmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePropertymappingsProviderGoogleWorkspacePmUuidIndexRouteHandler: RouteHandler<
  typeof deletePropertymappingsProviderGoogleWorkspacePmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderGoogleWorkspacePmUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderGoogleWorkspacePmUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderMicrosoftEntraIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderMicrosoftEntraIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertymappingsProviderMicrosoftEntraIndexRouteHandler: RouteHandler<
  typeof postPropertymappingsProviderMicrosoftEntraIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderMicrosoftEntraPmUuidIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderMicrosoftEntraPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPropertymappingsProviderMicrosoftEntraPmUuidIndexRouteHandler: RouteHandler<
  typeof putPropertymappingsProviderMicrosoftEntraPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPropertymappingsProviderMicrosoftEntraPmUuidIndexRouteHandler: RouteHandler<
  typeof patchPropertymappingsProviderMicrosoftEntraPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePropertymappingsProviderMicrosoftEntraPmUuidIndexRouteHandler: RouteHandler<
  typeof deletePropertymappingsProviderMicrosoftEntraPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderMicrosoftEntraPmUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderMicrosoftEntraPmUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderRacIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderRacIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertymappingsProviderRacIndexRouteHandler: RouteHandler<
  typeof postPropertymappingsProviderRacIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderRacPmUuidIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderRacPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPropertymappingsProviderRacPmUuidIndexRouteHandler: RouteHandler<
  typeof putPropertymappingsProviderRacPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPropertymappingsProviderRacPmUuidIndexRouteHandler: RouteHandler<
  typeof patchPropertymappingsProviderRacPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePropertymappingsProviderRacPmUuidIndexRouteHandler: RouteHandler<
  typeof deletePropertymappingsProviderRacPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderRacPmUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderRacPmUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderRadiusIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderRadiusIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertymappingsProviderRadiusIndexRouteHandler: RouteHandler<
  typeof postPropertymappingsProviderRadiusIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderRadiusPmUuidIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderRadiusPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPropertymappingsProviderRadiusPmUuidIndexRouteHandler: RouteHandler<
  typeof putPropertymappingsProviderRadiusPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPropertymappingsProviderRadiusPmUuidIndexRouteHandler: RouteHandler<
  typeof patchPropertymappingsProviderRadiusPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePropertymappingsProviderRadiusPmUuidIndexRouteHandler: RouteHandler<
  typeof deletePropertymappingsProviderRadiusPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderRadiusPmUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderRadiusPmUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderSamlIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderSamlIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertymappingsProviderSamlIndexRouteHandler: RouteHandler<
  typeof postPropertymappingsProviderSamlIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderSamlPmUuidIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderSamlPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPropertymappingsProviderSamlPmUuidIndexRouteHandler: RouteHandler<
  typeof putPropertymappingsProviderSamlPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPropertymappingsProviderSamlPmUuidIndexRouteHandler: RouteHandler<
  typeof patchPropertymappingsProviderSamlPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePropertymappingsProviderSamlPmUuidIndexRouteHandler: RouteHandler<
  typeof deletePropertymappingsProviderSamlPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderSamlPmUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderSamlPmUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderScimIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderScimIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertymappingsProviderScimIndexRouteHandler: RouteHandler<
  typeof postPropertymappingsProviderScimIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderScimPmUuidIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderScimPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPropertymappingsProviderScimPmUuidIndexRouteHandler: RouteHandler<
  typeof putPropertymappingsProviderScimPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPropertymappingsProviderScimPmUuidIndexRouteHandler: RouteHandler<
  typeof patchPropertymappingsProviderScimPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePropertymappingsProviderScimPmUuidIndexRouteHandler: RouteHandler<
  typeof deletePropertymappingsProviderScimPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderScimPmUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderScimPmUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderScopeIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderScopeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertymappingsProviderScopeIndexRouteHandler: RouteHandler<
  typeof postPropertymappingsProviderScopeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderScopePmUuidIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderScopePmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPropertymappingsProviderScopePmUuidIndexRouteHandler: RouteHandler<
  typeof putPropertymappingsProviderScopePmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPropertymappingsProviderScopePmUuidIndexRouteHandler: RouteHandler<
  typeof patchPropertymappingsProviderScopePmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePropertymappingsProviderScopePmUuidIndexRouteHandler: RouteHandler<
  typeof deletePropertymappingsProviderScopePmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsProviderScopePmUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsProviderScopePmUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceKerberosIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceKerberosIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertymappingsSourceKerberosIndexRouteHandler: RouteHandler<
  typeof postPropertymappingsSourceKerberosIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceKerberosPmUuidIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceKerberosPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPropertymappingsSourceKerberosPmUuidIndexRouteHandler: RouteHandler<
  typeof putPropertymappingsSourceKerberosPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPropertymappingsSourceKerberosPmUuidIndexRouteHandler: RouteHandler<
  typeof patchPropertymappingsSourceKerberosPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePropertymappingsSourceKerberosPmUuidIndexRouteHandler: RouteHandler<
  typeof deletePropertymappingsSourceKerberosPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceKerberosPmUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceKerberosPmUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceLdapIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceLdapIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertymappingsSourceLdapIndexRouteHandler: RouteHandler<
  typeof postPropertymappingsSourceLdapIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceLdapPmUuidIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceLdapPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPropertymappingsSourceLdapPmUuidIndexRouteHandler: RouteHandler<
  typeof putPropertymappingsSourceLdapPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPropertymappingsSourceLdapPmUuidIndexRouteHandler: RouteHandler<
  typeof patchPropertymappingsSourceLdapPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePropertymappingsSourceLdapPmUuidIndexRouteHandler: RouteHandler<
  typeof deletePropertymappingsSourceLdapPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceLdapPmUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceLdapPmUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceOauthIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceOauthIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertymappingsSourceOauthIndexRouteHandler: RouteHandler<
  typeof postPropertymappingsSourceOauthIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceOauthPmUuidIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceOauthPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPropertymappingsSourceOauthPmUuidIndexRouteHandler: RouteHandler<
  typeof putPropertymappingsSourceOauthPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPropertymappingsSourceOauthPmUuidIndexRouteHandler: RouteHandler<
  typeof patchPropertymappingsSourceOauthPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePropertymappingsSourceOauthPmUuidIndexRouteHandler: RouteHandler<
  typeof deletePropertymappingsSourceOauthPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceOauthPmUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceOauthPmUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourcePlexIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourcePlexIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertymappingsSourcePlexIndexRouteHandler: RouteHandler<
  typeof postPropertymappingsSourcePlexIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourcePlexPmUuidIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourcePlexPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPropertymappingsSourcePlexPmUuidIndexRouteHandler: RouteHandler<
  typeof putPropertymappingsSourcePlexPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPropertymappingsSourcePlexPmUuidIndexRouteHandler: RouteHandler<
  typeof patchPropertymappingsSourcePlexPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePropertymappingsSourcePlexPmUuidIndexRouteHandler: RouteHandler<
  typeof deletePropertymappingsSourcePlexPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourcePlexPmUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourcePlexPmUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceSamlIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceSamlIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertymappingsSourceSamlIndexRouteHandler: RouteHandler<
  typeof postPropertymappingsSourceSamlIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceSamlPmUuidIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceSamlPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPropertymappingsSourceSamlPmUuidIndexRouteHandler: RouteHandler<
  typeof putPropertymappingsSourceSamlPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPropertymappingsSourceSamlPmUuidIndexRouteHandler: RouteHandler<
  typeof patchPropertymappingsSourceSamlPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePropertymappingsSourceSamlPmUuidIndexRouteHandler: RouteHandler<
  typeof deletePropertymappingsSourceSamlPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceSamlPmUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceSamlPmUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceScimIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceScimIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertymappingsSourceScimIndexRouteHandler: RouteHandler<
  typeof postPropertymappingsSourceScimIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceScimPmUuidIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceScimPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPropertymappingsSourceScimPmUuidIndexRouteHandler: RouteHandler<
  typeof putPropertymappingsSourceScimPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPropertymappingsSourceScimPmUuidIndexRouteHandler: RouteHandler<
  typeof patchPropertymappingsSourceScimPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePropertymappingsSourceScimPmUuidIndexRouteHandler: RouteHandler<
  typeof deletePropertymappingsSourceScimPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceScimPmUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceScimPmUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceTelegramIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceTelegramIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPropertymappingsSourceTelegramIndexRouteHandler: RouteHandler<
  typeof postPropertymappingsSourceTelegramIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceTelegramPmUuidIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceTelegramPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPropertymappingsSourceTelegramPmUuidIndexRouteHandler: RouteHandler<
  typeof putPropertymappingsSourceTelegramPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPropertymappingsSourceTelegramPmUuidIndexRouteHandler: RouteHandler<
  typeof patchPropertymappingsSourceTelegramPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePropertymappingsSourceTelegramPmUuidIndexRouteHandler: RouteHandler<
  typeof deletePropertymappingsSourceTelegramPmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPropertymappingsSourceTelegramPmUuidUsedByIndexRouteHandler: RouteHandler<
  typeof getPropertymappingsSourceTelegramPmUuidUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
