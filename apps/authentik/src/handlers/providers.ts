import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const providersHandler = app
  .openapi(getProvidersAllIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersAllIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersAllIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersAllIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersAllTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersGoogleWorkspaceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersGoogleWorkspaceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersGoogleWorkspaceIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersGoogleWorkspaceIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersGoogleWorkspaceIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersGoogleWorkspaceIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersGoogleWorkspaceIdSyncObjectIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersGoogleWorkspaceIdSyncStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersGoogleWorkspaceIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersGoogleWorkspaceGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersGoogleWorkspaceGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersGoogleWorkspaceGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersGoogleWorkspaceGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersGoogleWorkspaceGroupsIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersGoogleWorkspaceUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersGoogleWorkspaceUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersGoogleWorkspaceUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersGoogleWorkspaceUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersGoogleWorkspaceUsersIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersLdapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersLdapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersLdapIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersLdapIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersLdapIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersLdapIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersLdapIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersMicrosoftEntraIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersMicrosoftEntraIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersMicrosoftEntraIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersMicrosoftEntraIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersMicrosoftEntraIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersMicrosoftEntraIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersMicrosoftEntraIdSyncObjectIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersMicrosoftEntraIdSyncStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersMicrosoftEntraIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersMicrosoftEntraGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersMicrosoftEntraGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersMicrosoftEntraGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersMicrosoftEntraGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersMicrosoftEntraGroupsIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersMicrosoftEntraUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersMicrosoftEntraUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersMicrosoftEntraUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersMicrosoftEntraUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersMicrosoftEntraUsersIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersOauth2IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersOauth2IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersOauth2DcrIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersOauth2DcrIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersOauth2DcrPbmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersOauth2DcrPbmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersOauth2DcrPbmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersOauth2DcrPbmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersOauth2IdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersOauth2IdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersOauth2IdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersOauth2IdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersOauth2IdPreviewUserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersOauth2IdSetupUrlsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersOauth2IdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProxyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersProxyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProxyIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersProxyIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersProxyIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersProxyIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProxyIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersRacIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersRacIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersRacIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersRacIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersRacIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersRacIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersRacIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersRadiusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersRadiusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersRadiusIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersRadiusIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersRadiusIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersRadiusIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersRadiusIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersSamlIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersSamlIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersSamlIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersSamlIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersSamlIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersSamlIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersSamlIdMetadataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersSamlIdPreviewUserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersSamlIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersSamlImportMetadataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersScimIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersScimIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersScimIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersScimIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersScimIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersScimIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersScimIdSyncObjectIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersScimIdSyncStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersScimIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersScimGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersScimGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersScimGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersScimGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersScimGroupsIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersScimUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersScimUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersScimUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersScimUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersScimUsersIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersSsfIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersSsfIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersSsfIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersSsfIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersSsfIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersSsfIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersSsfIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersWsfedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersWsfedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersWsfedIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersWsfedIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersWsfedIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersWsfedIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersWsfedIdMetadataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersWsfedIdPreviewUserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersWsfedIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
