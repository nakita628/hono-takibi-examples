import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ServiceAccountsServiceAccountIdAccessTokensTokenIdRoute,
  deleteApiV2ServiceAccountsServiceAccountIdApplicationKeysAppKeyIdRoute,
  getApiV2ServiceAccountsServiceAccountIdAccessTokensRoute,
  getApiV2ServiceAccountsServiceAccountIdAccessTokensTokenIdRoute,
  getApiV2ServiceAccountsServiceAccountIdApplicationKeysAppKeyIdRoute,
  getApiV2ServiceAccountsServiceAccountIdApplicationKeysRoute,
  patchApiV2ServiceAccountsServiceAccountIdAccessTokensTokenIdRoute,
  patchApiV2ServiceAccountsServiceAccountIdApplicationKeysAppKeyIdRoute,
  postApiV2ServiceAccountsRoute,
  postApiV2ServiceAccountsServiceAccountIdAccessTokensRoute,
  postApiV2ServiceAccountsServiceAccountIdApplicationKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceAccountsHandler = app
  .openapi(postApiV2ServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ServiceAccountsServiceAccountIdAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ServiceAccountsServiceAccountIdAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ServiceAccountsServiceAccountIdAccessTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ServiceAccountsServiceAccountIdAccessTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ServiceAccountsServiceAccountIdAccessTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ServiceAccountsServiceAccountIdApplicationKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ServiceAccountsServiceAccountIdApplicationKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ServiceAccountsServiceAccountIdApplicationKeysAppKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ServiceAccountsServiceAccountIdApplicationKeysAppKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ServiceAccountsServiceAccountIdApplicationKeysAppKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
