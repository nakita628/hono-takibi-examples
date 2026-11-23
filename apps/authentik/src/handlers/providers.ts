import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteProvidersAllIdIndexRoute,
  deleteProvidersGoogleWorkspaceGroupsIdIndexRoute,
  deleteProvidersGoogleWorkspaceIdIndexRoute,
  deleteProvidersGoogleWorkspaceUsersIdIndexRoute,
  deleteProvidersLdapIdIndexRoute,
  deleteProvidersMicrosoftEntraGroupsIdIndexRoute,
  deleteProvidersMicrosoftEntraIdIndexRoute,
  deleteProvidersMicrosoftEntraUsersIdIndexRoute,
  deleteProvidersOauth2DcrPbmUuidIndexRoute,
  deleteProvidersOauth2IdIndexRoute,
  deleteProvidersProxyIdIndexRoute,
  deleteProvidersRacIdIndexRoute,
  deleteProvidersRadiusIdIndexRoute,
  deleteProvidersSamlIdIndexRoute,
  deleteProvidersScimGroupsIdIndexRoute,
  deleteProvidersScimIdIndexRoute,
  deleteProvidersScimUsersIdIndexRoute,
  deleteProvidersSsfIdIndexRoute,
  deleteProvidersWsfedIdIndexRoute,
  getProvidersAllIdIndexRoute,
  getProvidersAllIdUsedByIndexRoute,
  getProvidersAllIndexRoute,
  getProvidersAllTypesIndexRoute,
  getProvidersGoogleWorkspaceGroupsIdIndexRoute,
  getProvidersGoogleWorkspaceGroupsIdUsedByIndexRoute,
  getProvidersGoogleWorkspaceGroupsIndexRoute,
  getProvidersGoogleWorkspaceIdIndexRoute,
  getProvidersGoogleWorkspaceIdSyncStatusIndexRoute,
  getProvidersGoogleWorkspaceIdUsedByIndexRoute,
  getProvidersGoogleWorkspaceIndexRoute,
  getProvidersGoogleWorkspaceUsersIdIndexRoute,
  getProvidersGoogleWorkspaceUsersIdUsedByIndexRoute,
  getProvidersGoogleWorkspaceUsersIndexRoute,
  getProvidersLdapIdIndexRoute,
  getProvidersLdapIdUsedByIndexRoute,
  getProvidersLdapIndexRoute,
  getProvidersMicrosoftEntraGroupsIdIndexRoute,
  getProvidersMicrosoftEntraGroupsIdUsedByIndexRoute,
  getProvidersMicrosoftEntraGroupsIndexRoute,
  getProvidersMicrosoftEntraIdIndexRoute,
  getProvidersMicrosoftEntraIdSyncStatusIndexRoute,
  getProvidersMicrosoftEntraIdUsedByIndexRoute,
  getProvidersMicrosoftEntraIndexRoute,
  getProvidersMicrosoftEntraUsersIdIndexRoute,
  getProvidersMicrosoftEntraUsersIdUsedByIndexRoute,
  getProvidersMicrosoftEntraUsersIndexRoute,
  getProvidersOauth2DcrIndexRoute,
  getProvidersOauth2DcrPbmUuidIndexRoute,
  getProvidersOauth2IdIndexRoute,
  getProvidersOauth2IdPreviewUserIndexRoute,
  getProvidersOauth2IdSetupUrlsIndexRoute,
  getProvidersOauth2IdUsedByIndexRoute,
  getProvidersOauth2IndexRoute,
  getProvidersProxyIdIndexRoute,
  getProvidersProxyIdUsedByIndexRoute,
  getProvidersProxyIndexRoute,
  getProvidersRacIdIndexRoute,
  getProvidersRacIdUsedByIndexRoute,
  getProvidersRacIndexRoute,
  getProvidersRadiusIdIndexRoute,
  getProvidersRadiusIdUsedByIndexRoute,
  getProvidersRadiusIndexRoute,
  getProvidersSamlIdIndexRoute,
  getProvidersSamlIdMetadataIndexRoute,
  getProvidersSamlIdPreviewUserIndexRoute,
  getProvidersSamlIdUsedByIndexRoute,
  getProvidersSamlIndexRoute,
  getProvidersScimGroupsIdIndexRoute,
  getProvidersScimGroupsIdUsedByIndexRoute,
  getProvidersScimGroupsIndexRoute,
  getProvidersScimIdIndexRoute,
  getProvidersScimIdSyncStatusIndexRoute,
  getProvidersScimIdUsedByIndexRoute,
  getProvidersScimIndexRoute,
  getProvidersScimUsersIdIndexRoute,
  getProvidersScimUsersIdUsedByIndexRoute,
  getProvidersScimUsersIndexRoute,
  getProvidersSsfIdIndexRoute,
  getProvidersSsfIdUsedByIndexRoute,
  getProvidersSsfIndexRoute,
  getProvidersWsfedIdIndexRoute,
  getProvidersWsfedIdMetadataIndexRoute,
  getProvidersWsfedIdPreviewUserIndexRoute,
  getProvidersWsfedIdUsedByIndexRoute,
  getProvidersWsfedIndexRoute,
  patchProvidersGoogleWorkspaceIdIndexRoute,
  patchProvidersLdapIdIndexRoute,
  patchProvidersMicrosoftEntraIdIndexRoute,
  patchProvidersOauth2DcrPbmUuidIndexRoute,
  patchProvidersOauth2IdIndexRoute,
  patchProvidersProxyIdIndexRoute,
  patchProvidersRacIdIndexRoute,
  patchProvidersRadiusIdIndexRoute,
  patchProvidersSamlIdIndexRoute,
  patchProvidersScimIdIndexRoute,
  patchProvidersSsfIdIndexRoute,
  patchProvidersWsfedIdIndexRoute,
  postProvidersGoogleWorkspaceGroupsIndexRoute,
  postProvidersGoogleWorkspaceIdSyncObjectIndexRoute,
  postProvidersGoogleWorkspaceIndexRoute,
  postProvidersGoogleWorkspaceUsersIndexRoute,
  postProvidersLdapIndexRoute,
  postProvidersMicrosoftEntraGroupsIndexRoute,
  postProvidersMicrosoftEntraIdSyncObjectIndexRoute,
  postProvidersMicrosoftEntraIndexRoute,
  postProvidersMicrosoftEntraUsersIndexRoute,
  postProvidersOauth2DcrIndexRoute,
  postProvidersOauth2IndexRoute,
  postProvidersProxyIndexRoute,
  postProvidersRacIndexRoute,
  postProvidersRadiusIndexRoute,
  postProvidersSamlImportMetadataIndexRoute,
  postProvidersSamlIndexRoute,
  postProvidersScimGroupsIndexRoute,
  postProvidersScimIdSyncObjectIndexRoute,
  postProvidersScimIndexRoute,
  postProvidersScimUsersIndexRoute,
  postProvidersSsfIndexRoute,
  postProvidersWsfedIndexRoute,
  putProvidersGoogleWorkspaceIdIndexRoute,
  putProvidersLdapIdIndexRoute,
  putProvidersMicrosoftEntraIdIndexRoute,
  putProvidersOauth2DcrPbmUuidIndexRoute,
  putProvidersOauth2IdIndexRoute,
  putProvidersProxyIdIndexRoute,
  putProvidersRacIdIndexRoute,
  putProvidersRadiusIdIndexRoute,
  putProvidersSamlIdIndexRoute,
  putProvidersScimIdIndexRoute,
  putProvidersSsfIdIndexRoute,
  putProvidersWsfedIdIndexRoute,
} from '../routes'

export const getProvidersAllIndexRouteHandler: RouteHandler<
  typeof getProvidersAllIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersAllIdIndexRouteHandler: RouteHandler<
  typeof getProvidersAllIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersAllIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersAllIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersAllIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersAllIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersAllTypesIndexRouteHandler: RouteHandler<
  typeof getProvidersAllTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersGoogleWorkspaceIndexRouteHandler: RouteHandler<
  typeof getProvidersGoogleWorkspaceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersGoogleWorkspaceIndexRouteHandler: RouteHandler<
  typeof postProvidersGoogleWorkspaceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersGoogleWorkspaceIdIndexRouteHandler: RouteHandler<
  typeof getProvidersGoogleWorkspaceIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProvidersGoogleWorkspaceIdIndexRouteHandler: RouteHandler<
  typeof putProvidersGoogleWorkspaceIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProvidersGoogleWorkspaceIdIndexRouteHandler: RouteHandler<
  typeof patchProvidersGoogleWorkspaceIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersGoogleWorkspaceIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersGoogleWorkspaceIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersGoogleWorkspaceIdSyncObjectIndexRouteHandler: RouteHandler<
  typeof postProvidersGoogleWorkspaceIdSyncObjectIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersGoogleWorkspaceIdSyncStatusIndexRouteHandler: RouteHandler<
  typeof getProvidersGoogleWorkspaceIdSyncStatusIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersGoogleWorkspaceIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersGoogleWorkspaceIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersGoogleWorkspaceGroupsIndexRouteHandler: RouteHandler<
  typeof getProvidersGoogleWorkspaceGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersGoogleWorkspaceGroupsIndexRouteHandler: RouteHandler<
  typeof postProvidersGoogleWorkspaceGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersGoogleWorkspaceGroupsIdIndexRouteHandler: RouteHandler<
  typeof getProvidersGoogleWorkspaceGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersGoogleWorkspaceGroupsIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersGoogleWorkspaceGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersGoogleWorkspaceGroupsIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersGoogleWorkspaceGroupsIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersGoogleWorkspaceUsersIndexRouteHandler: RouteHandler<
  typeof getProvidersGoogleWorkspaceUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersGoogleWorkspaceUsersIndexRouteHandler: RouteHandler<
  typeof postProvidersGoogleWorkspaceUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersGoogleWorkspaceUsersIdIndexRouteHandler: RouteHandler<
  typeof getProvidersGoogleWorkspaceUsersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersGoogleWorkspaceUsersIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersGoogleWorkspaceUsersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersGoogleWorkspaceUsersIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersGoogleWorkspaceUsersIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersLdapIndexRouteHandler: RouteHandler<
  typeof getProvidersLdapIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersLdapIndexRouteHandler: RouteHandler<
  typeof postProvidersLdapIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersLdapIdIndexRouteHandler: RouteHandler<
  typeof getProvidersLdapIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProvidersLdapIdIndexRouteHandler: RouteHandler<
  typeof putProvidersLdapIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProvidersLdapIdIndexRouteHandler: RouteHandler<
  typeof patchProvidersLdapIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersLdapIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersLdapIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersLdapIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersLdapIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersMicrosoftEntraIndexRouteHandler: RouteHandler<
  typeof getProvidersMicrosoftEntraIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersMicrosoftEntraIndexRouteHandler: RouteHandler<
  typeof postProvidersMicrosoftEntraIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersMicrosoftEntraIdIndexRouteHandler: RouteHandler<
  typeof getProvidersMicrosoftEntraIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProvidersMicrosoftEntraIdIndexRouteHandler: RouteHandler<
  typeof putProvidersMicrosoftEntraIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProvidersMicrosoftEntraIdIndexRouteHandler: RouteHandler<
  typeof patchProvidersMicrosoftEntraIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersMicrosoftEntraIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersMicrosoftEntraIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersMicrosoftEntraIdSyncObjectIndexRouteHandler: RouteHandler<
  typeof postProvidersMicrosoftEntraIdSyncObjectIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersMicrosoftEntraIdSyncStatusIndexRouteHandler: RouteHandler<
  typeof getProvidersMicrosoftEntraIdSyncStatusIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersMicrosoftEntraIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersMicrosoftEntraIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersMicrosoftEntraGroupsIndexRouteHandler: RouteHandler<
  typeof getProvidersMicrosoftEntraGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersMicrosoftEntraGroupsIndexRouteHandler: RouteHandler<
  typeof postProvidersMicrosoftEntraGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersMicrosoftEntraGroupsIdIndexRouteHandler: RouteHandler<
  typeof getProvidersMicrosoftEntraGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersMicrosoftEntraGroupsIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersMicrosoftEntraGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersMicrosoftEntraGroupsIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersMicrosoftEntraGroupsIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersMicrosoftEntraUsersIndexRouteHandler: RouteHandler<
  typeof getProvidersMicrosoftEntraUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersMicrosoftEntraUsersIndexRouteHandler: RouteHandler<
  typeof postProvidersMicrosoftEntraUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersMicrosoftEntraUsersIdIndexRouteHandler: RouteHandler<
  typeof getProvidersMicrosoftEntraUsersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersMicrosoftEntraUsersIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersMicrosoftEntraUsersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersMicrosoftEntraUsersIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersMicrosoftEntraUsersIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersOauth2IndexRouteHandler: RouteHandler<
  typeof getProvidersOauth2IndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersOauth2IndexRouteHandler: RouteHandler<
  typeof postProvidersOauth2IndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersOauth2DcrIndexRouteHandler: RouteHandler<
  typeof getProvidersOauth2DcrIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersOauth2DcrIndexRouteHandler: RouteHandler<
  typeof postProvidersOauth2DcrIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersOauth2DcrPbmUuidIndexRouteHandler: RouteHandler<
  typeof getProvidersOauth2DcrPbmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProvidersOauth2DcrPbmUuidIndexRouteHandler: RouteHandler<
  typeof putProvidersOauth2DcrPbmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProvidersOauth2DcrPbmUuidIndexRouteHandler: RouteHandler<
  typeof patchProvidersOauth2DcrPbmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersOauth2DcrPbmUuidIndexRouteHandler: RouteHandler<
  typeof deleteProvidersOauth2DcrPbmUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersOauth2IdIndexRouteHandler: RouteHandler<
  typeof getProvidersOauth2IdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProvidersOauth2IdIndexRouteHandler: RouteHandler<
  typeof putProvidersOauth2IdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProvidersOauth2IdIndexRouteHandler: RouteHandler<
  typeof patchProvidersOauth2IdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersOauth2IdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersOauth2IdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersOauth2IdPreviewUserIndexRouteHandler: RouteHandler<
  typeof getProvidersOauth2IdPreviewUserIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersOauth2IdSetupUrlsIndexRouteHandler: RouteHandler<
  typeof getProvidersOauth2IdSetupUrlsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersOauth2IdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersOauth2IdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersProxyIndexRouteHandler: RouteHandler<
  typeof getProvidersProxyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersProxyIndexRouteHandler: RouteHandler<
  typeof postProvidersProxyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersProxyIdIndexRouteHandler: RouteHandler<
  typeof getProvidersProxyIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProvidersProxyIdIndexRouteHandler: RouteHandler<
  typeof putProvidersProxyIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProvidersProxyIdIndexRouteHandler: RouteHandler<
  typeof patchProvidersProxyIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersProxyIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersProxyIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersProxyIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersProxyIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersRacIndexRouteHandler: RouteHandler<
  typeof getProvidersRacIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersRacIndexRouteHandler: RouteHandler<
  typeof postProvidersRacIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersRacIdIndexRouteHandler: RouteHandler<
  typeof getProvidersRacIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProvidersRacIdIndexRouteHandler: RouteHandler<
  typeof putProvidersRacIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProvidersRacIdIndexRouteHandler: RouteHandler<
  typeof patchProvidersRacIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersRacIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersRacIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersRacIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersRacIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersRadiusIndexRouteHandler: RouteHandler<
  typeof getProvidersRadiusIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersRadiusIndexRouteHandler: RouteHandler<
  typeof postProvidersRadiusIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersRadiusIdIndexRouteHandler: RouteHandler<
  typeof getProvidersRadiusIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProvidersRadiusIdIndexRouteHandler: RouteHandler<
  typeof putProvidersRadiusIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProvidersRadiusIdIndexRouteHandler: RouteHandler<
  typeof patchProvidersRadiusIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersRadiusIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersRadiusIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersRadiusIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersRadiusIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersSamlIndexRouteHandler: RouteHandler<
  typeof getProvidersSamlIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersSamlIndexRouteHandler: RouteHandler<
  typeof postProvidersSamlIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersSamlIdIndexRouteHandler: RouteHandler<
  typeof getProvidersSamlIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProvidersSamlIdIndexRouteHandler: RouteHandler<
  typeof putProvidersSamlIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProvidersSamlIdIndexRouteHandler: RouteHandler<
  typeof patchProvidersSamlIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersSamlIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersSamlIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersSamlIdMetadataIndexRouteHandler: RouteHandler<
  typeof getProvidersSamlIdMetadataIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersSamlIdPreviewUserIndexRouteHandler: RouteHandler<
  typeof getProvidersSamlIdPreviewUserIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersSamlIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersSamlIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersSamlImportMetadataIndexRouteHandler: RouteHandler<
  typeof postProvidersSamlImportMetadataIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersScimIndexRouteHandler: RouteHandler<
  typeof getProvidersScimIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersScimIndexRouteHandler: RouteHandler<
  typeof postProvidersScimIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersScimIdIndexRouteHandler: RouteHandler<
  typeof getProvidersScimIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProvidersScimIdIndexRouteHandler: RouteHandler<
  typeof putProvidersScimIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProvidersScimIdIndexRouteHandler: RouteHandler<
  typeof patchProvidersScimIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersScimIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersScimIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersScimIdSyncObjectIndexRouteHandler: RouteHandler<
  typeof postProvidersScimIdSyncObjectIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersScimIdSyncStatusIndexRouteHandler: RouteHandler<
  typeof getProvidersScimIdSyncStatusIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersScimIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersScimIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersScimGroupsIndexRouteHandler: RouteHandler<
  typeof getProvidersScimGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersScimGroupsIndexRouteHandler: RouteHandler<
  typeof postProvidersScimGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersScimGroupsIdIndexRouteHandler: RouteHandler<
  typeof getProvidersScimGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersScimGroupsIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersScimGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersScimGroupsIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersScimGroupsIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersScimUsersIndexRouteHandler: RouteHandler<
  typeof getProvidersScimUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersScimUsersIndexRouteHandler: RouteHandler<
  typeof postProvidersScimUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersScimUsersIdIndexRouteHandler: RouteHandler<
  typeof getProvidersScimUsersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersScimUsersIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersScimUsersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersScimUsersIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersScimUsersIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersSsfIndexRouteHandler: RouteHandler<
  typeof getProvidersSsfIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersSsfIndexRouteHandler: RouteHandler<
  typeof postProvidersSsfIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersSsfIdIndexRouteHandler: RouteHandler<
  typeof getProvidersSsfIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProvidersSsfIdIndexRouteHandler: RouteHandler<
  typeof putProvidersSsfIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProvidersSsfIdIndexRouteHandler: RouteHandler<
  typeof patchProvidersSsfIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersSsfIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersSsfIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersSsfIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersSsfIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersWsfedIndexRouteHandler: RouteHandler<
  typeof getProvidersWsfedIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvidersWsfedIndexRouteHandler: RouteHandler<
  typeof postProvidersWsfedIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersWsfedIdIndexRouteHandler: RouteHandler<
  typeof getProvidersWsfedIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProvidersWsfedIdIndexRouteHandler: RouteHandler<
  typeof putProvidersWsfedIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProvidersWsfedIdIndexRouteHandler: RouteHandler<
  typeof patchProvidersWsfedIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProvidersWsfedIdIndexRouteHandler: RouteHandler<
  typeof deleteProvidersWsfedIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersWsfedIdMetadataIndexRouteHandler: RouteHandler<
  typeof getProvidersWsfedIdMetadataIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersWsfedIdPreviewUserIndexRouteHandler: RouteHandler<
  typeof getProvidersWsfedIdPreviewUserIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersWsfedIdUsedByIndexRouteHandler: RouteHandler<
  typeof getProvidersWsfedIdUsedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
