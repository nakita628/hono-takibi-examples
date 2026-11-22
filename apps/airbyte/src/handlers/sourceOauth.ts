import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1SourceOauthsCompleteOauthRoute,
  postV1SourceOauthsGetConsentUrlRoute,
  postV1SourceOauthsGetEmbeddedConsentUrlRoute,
  postV1SourceOauthsGetScopesRoute,
  postV1SourceOauthsOauthParamsCreateRoute,
  postV1SourceOauthsRevokeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourceOauthHandler = app
  .openapi(postV1SourceOauthsOauthParamsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceOauthsGetConsentUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceOauthsGetEmbeddedConsentUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceOauthsCompleteOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceOauthsRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceOauthsGetScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
