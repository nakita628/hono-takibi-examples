import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ApiKeysApiKeyIdRoute,
  deleteApiV2ApplicationKeysAppKeyIdRoute,
  deleteApiV2CurrentUserApplicationKeysAppKeyIdRoute,
  deleteApiV2PersonalAccessTokensTokenIdRoute,
  getApiV2ApiKeysApiKeyIdRoute,
  getApiV2ApiKeysRoute,
  getApiV2ApplicationKeysAppKeyIdRoute,
  getApiV2ApplicationKeysRoute,
  getApiV2CurrentUserApplicationKeysAppKeyIdRoute,
  getApiV2CurrentUserApplicationKeysRoute,
  getApiV2PersonalAccessTokensRoute,
  getApiV2PersonalAccessTokensTokenIdRoute,
  getApiV2ValidateKeysRoute,
  getApiV2ValidateRoute,
  patchApiV2ApiKeysApiKeyIdRoute,
  patchApiV2ApplicationKeysAppKeyIdRoute,
  patchApiV2CurrentUserApplicationKeysAppKeyIdRoute,
  patchApiV2PersonalAccessTokensTokenIdRoute,
  postApiV2ApiKeysRoute,
  postApiV2CurrentUserApplicationKeysRoute,
  postApiV2PersonalAccessTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keyManagementHandler = app
  .openapi(getApiV2ApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApplicationKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ApplicationKeysAppKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApplicationKeysAppKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ApplicationKeysAppKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CurrentUserApplicationKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CurrentUserApplicationKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CurrentUserApplicationKeysAppKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CurrentUserApplicationKeysAppKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CurrentUserApplicationKeysAppKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PersonalAccessTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PersonalAccessTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2PersonalAccessTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ValidateKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
