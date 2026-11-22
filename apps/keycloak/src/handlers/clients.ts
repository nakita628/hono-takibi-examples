import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmClientsClientUuidClientSecretRotatedRoute,
  deleteAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeIdRoute,
  deleteAdminRealmsRealmClientsClientUuidNodesNodeRoute,
  deleteAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeIdRoute,
  deleteAdminRealmsRealmClientsClientUuidRoute,
  getAdminRealmsRealmClientsClientUuidClientSecretRotatedRoute,
  getAdminRealmsRealmClientsClientUuidClientSecretRoute,
  getAdminRealmsRealmClientsClientUuidDefaultClientScopesRoute,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleAccessTokenRoute,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleIdTokenRoute,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleSamlResponseRoute,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleUserinfoRoute,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesProtocolMappersRoute,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdGrantedRoute,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRoute,
  getAdminRealmsRealmClientsClientUuidInstallationProvidersProviderIdRoute,
  getAdminRealmsRealmClientsClientUuidManagementPermissionsRoute,
  getAdminRealmsRealmClientsClientUuidOfflineSessionCountRoute,
  getAdminRealmsRealmClientsClientUuidOfflineSessionsRoute,
  getAdminRealmsRealmClientsClientUuidOptionalClientScopesRoute,
  getAdminRealmsRealmClientsClientUuidRoute,
  getAdminRealmsRealmClientsClientUuidServiceAccountUserRoute,
  getAdminRealmsRealmClientsClientUuidSessionCountRoute,
  getAdminRealmsRealmClientsClientUuidTestNodesAvailableRoute,
  getAdminRealmsRealmClientsClientUuidUserSessionsRoute,
  getAdminRealmsRealmClientsRoute,
  postAdminRealmsRealmClientsClientUuidClientSecretRoute,
  postAdminRealmsRealmClientsClientUuidNodesRoute,
  postAdminRealmsRealmClientsClientUuidPushRevocationRoute,
  postAdminRealmsRealmClientsClientUuidRegistrationAccessTokenRoute,
  postAdminRealmsRealmClientsRoute,
  putAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeIdRoute,
  putAdminRealmsRealmClientsClientUuidManagementPermissionsRoute,
  putAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeIdRoute,
  putAdminRealmsRealmClientsClientUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientsHandler = app
  .openapi(getAdminRealmsRealmClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidClientSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidClientSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidClientSecretRotatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidClientSecretRotatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidDefaultClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleAccessTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleSamlResponseRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleUserinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidEvaluateScopesProtocolMappersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdGrantedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientsClientUuidInstallationProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidNodesNodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidOfflineSessionCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidOfflineSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidOptionalClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidPushRevocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidRegistrationAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidServiceAccountUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidSessionCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidTestNodesAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidUserSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
