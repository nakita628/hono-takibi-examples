import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTykApisApiIDRoute,
  deleteTykApisOasApiIDRoute,
  deleteTykCacheApiIDRoute,
  deleteTykCacheJwksApiIDRoute,
  deleteTykCacheJwksRoute,
  deleteTykCertsCertIDRoute,
  deleteTykKeysKeyIDRoute,
  deleteTykMcpsApiIDRoute,
  deleteTykOauthClientsApiIDKeyNameRoute,
  deleteTykOauthRefreshKeyNameRoute,
  deleteTykOauthTokensRoute,
  deleteTykOrgKeysKeyIDRoute,
  deleteTykPoliciesPolIDRoute,
  getTykApisApiIDRoute,
  getTykApisApiIDVersionsRoute,
  getTykApisOasApiIDExportRoute,
  getTykApisOasApiIDRoute,
  getTykApisOasApiIDVersionsRoute,
  getTykApisOasExportRoute,
  getTykApisOasRoute,
  getTykApisRoute,
  getTykCertsCertIDRoute,
  getTykCertsRoute,
  getTykKeysKeyIDRoute,
  getTykKeysRoute,
  getTykMcpsApiIDRoute,
  getTykMcpsRoute,
  getTykOauthClientsApiIDKeyNameRoute,
  getTykOauthClientsApiIDKeyNameTokensRoute,
  getTykOauthClientsApiIDRoute,
  getTykOauthClientsApisAppIDRoute,
  getTykOrgKeysKeyIDRoute,
  getTykOrgKeysRoute,
  getTykPoliciesPolIDRoute,
  getTykPoliciesRoute,
  getTykReloadGroupRoute,
  getTykReloadRoute,
  getTykSchemaRoute,
  patchTykApisOasApiIDRoute,
  postTykApisOasImportRoute,
  postTykApisOasRoute,
  postTykApisRoute,
  postTykCertsRoute,
  postTykDebugRoute,
  postTykKeysCreateRoute,
  postTykKeysKeyIDRoute,
  postTykKeysPolicyKeyIDRoute,
  postTykKeysPreviewRoute,
  postTykKeysRoute,
  postTykMcpsRoute,
  postTykOauthClientsCreateRoute,
  postTykOauthRevokeAllRoute,
  postTykOauthRevokeRoute,
  postTykOrgKeysKeyIDRoute,
  postTykPoliciesRoute,
  putTykApisApiIDRoute,
  putTykApisOasApiIDRoute,
  putTykKeysKeyIDRoute,
  putTykMcpsApiIDRoute,
  putTykOauthClientsApiIDKeyNameRotateRoute,
  putTykOauthClientsApiIDKeyNameRoute,
  putTykOrgKeysKeyIDRoute,
  putTykPoliciesPolIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tykHandler = app
  .openapi(getTykApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykApisApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykApisApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTykApisApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykApisApiIDVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykApisOasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykApisOasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykApisOasApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykApisOasApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTykApisOasApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTykApisOasApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykApisOasApiIDExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykApisOasApiIDVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykApisOasExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykApisOasImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykMcpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykMcpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykMcpsApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTykMcpsApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykMcpsApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykCacheApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykCacheJwksApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykCacheJwksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykCertsCertIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykCertsCertIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykDebugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykKeysKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykKeysKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykKeysKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTykKeysKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykKeysCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykKeysPolicyKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykKeysPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykOauthClientsApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykOauthClientsApiIDKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykOauthClientsApiIDKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTykOauthClientsApiIDKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTykOauthClientsApiIDKeyNameRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykOauthClientsApiIDKeyNameTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykOauthClientsApisAppIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykOauthClientsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykOauthRefreshKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykOauthRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykOauthRevokeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykOauthTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykOrgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykOrgKeysKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykOrgKeysKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykOrgKeysKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTykOrgKeysKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykPoliciesPolIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykPoliciesPolIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTykPoliciesPolIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykReloadGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
