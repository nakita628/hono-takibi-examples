import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmClientsIdDefaultClientScopesClientScopeIdRoute,
  deleteRealmClientsIdNodesNodeRoute,
  deleteRealmClientsIdOptionalClientScopesClientScopeIdRoute,
  deleteRealmClientsIdRoute,
  getRealmClientsIdClientSecretRoute,
  getRealmClientsIdDefaultClientScopesRoute,
  getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRoute,
  getRealmClientsIdEvaluateScopesProtocolMappersRoute,
  getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRoute,
  getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRoute,
  getRealmClientsIdInstallationProvidersProviderIdRoute,
  getRealmClientsIdManagementPermissionsRoute,
  getRealmClientsIdOfflineSessionCountRoute,
  getRealmClientsIdOfflineSessionsRoute,
  getRealmClientsIdOptionalClientScopesRoute,
  getRealmClientsIdRoute,
  getRealmClientsIdServiceAccountUserRoute,
  getRealmClientsIdSessionCountRoute,
  getRealmClientsIdTestNodesAvailableRoute,
  getRealmClientsIdUserSessionsRoute,
  getRealmClientsRoute,
  postRealmClientsIdClientSecretRoute,
  postRealmClientsIdNodesRoute,
  postRealmClientsIdPushRevocationRoute,
  postRealmClientsIdRegistrationAccessTokenRoute,
  postRealmClientsRoute,
  putRealmClientsIdDefaultClientScopesClientScopeIdRoute,
  putRealmClientsIdManagementPermissionsRoute,
  putRealmClientsIdOptionalClientScopesClientScopeIdRoute,
  putRealmClientsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientsHandler = app
  .openapi(getRealmClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdClientSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdClientSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdDefaultClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsIdDefaultClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientsIdDefaultClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdEvaluateScopesProtocolMappersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdInstallationProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientsIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsIdNodesNodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdOfflineSessionCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdOfflineSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdOptionalClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsIdOptionalClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientsIdOptionalClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdPushRevocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdRegistrationAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdServiceAccountUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdSessionCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdTestNodesAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdUserSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
