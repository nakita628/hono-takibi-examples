import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const propertymappingsHandler = app
  .openapi(getPropertymappingsAllIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsAllPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePropertymappingsAllPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPropertymappingsAllPmUuidTestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsAllPmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsAllTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsNotificationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPropertymappingsNotificationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsNotificationPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPropertymappingsNotificationPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPropertymappingsNotificationPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePropertymappingsNotificationPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsNotificationPmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderGoogleWorkspaceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPropertymappingsProviderGoogleWorkspaceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderGoogleWorkspacePmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPropertymappingsProviderGoogleWorkspacePmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPropertymappingsProviderGoogleWorkspacePmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePropertymappingsProviderGoogleWorkspacePmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderGoogleWorkspacePmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderMicrosoftEntraIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPropertymappingsProviderMicrosoftEntraIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderMicrosoftEntraPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPropertymappingsProviderMicrosoftEntraPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPropertymappingsProviderMicrosoftEntraPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePropertymappingsProviderMicrosoftEntraPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderMicrosoftEntraPmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderRacIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPropertymappingsProviderRacIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderRacPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPropertymappingsProviderRacPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPropertymappingsProviderRacPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePropertymappingsProviderRacPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderRacPmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderRadiusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPropertymappingsProviderRadiusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderRadiusPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPropertymappingsProviderRadiusPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPropertymappingsProviderRadiusPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePropertymappingsProviderRadiusPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderRadiusPmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderSamlIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPropertymappingsProviderSamlIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderSamlPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPropertymappingsProviderSamlPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPropertymappingsProviderSamlPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePropertymappingsProviderSamlPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderSamlPmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderScimIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPropertymappingsProviderScimIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderScimPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPropertymappingsProviderScimPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPropertymappingsProviderScimPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePropertymappingsProviderScimPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderScimPmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderScopeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPropertymappingsProviderScopeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderScopePmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPropertymappingsProviderScopePmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPropertymappingsProviderScopePmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePropertymappingsProviderScopePmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsProviderScopePmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceKerberosIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPropertymappingsSourceKerberosIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceKerberosPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPropertymappingsSourceKerberosPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPropertymappingsSourceKerberosPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePropertymappingsSourceKerberosPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceKerberosPmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceLdapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPropertymappingsSourceLdapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceLdapPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPropertymappingsSourceLdapPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPropertymappingsSourceLdapPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePropertymappingsSourceLdapPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceLdapPmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceOauthIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPropertymappingsSourceOauthIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceOauthPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPropertymappingsSourceOauthPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPropertymappingsSourceOauthPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePropertymappingsSourceOauthPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceOauthPmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourcePlexIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPropertymappingsSourcePlexIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourcePlexPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPropertymappingsSourcePlexPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPropertymappingsSourcePlexPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePropertymappingsSourcePlexPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourcePlexPmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceSamlIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPropertymappingsSourceSamlIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceSamlPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPropertymappingsSourceSamlPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPropertymappingsSourceSamlPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePropertymappingsSourceSamlPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceSamlPmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceScimIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPropertymappingsSourceScimIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceScimPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPropertymappingsSourceScimPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPropertymappingsSourceScimPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePropertymappingsSourceScimPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceScimPmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceTelegramIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPropertymappingsSourceTelegramIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceTelegramPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPropertymappingsSourceTelegramPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPropertymappingsSourceTelegramPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePropertymappingsSourceTelegramPmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPropertymappingsSourceTelegramPmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
