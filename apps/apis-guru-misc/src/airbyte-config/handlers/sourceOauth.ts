import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1SourceOauthsCompleteOauthRoute,
  postV1SourceOauthsGetConsentUrlRoute,
  postV1SourceOauthsOauthParamsCreateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourceOauthHandler = app
  .openapi(postV1SourceOauthsCompleteOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceOauthsGetConsentUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceOauthsOauthParamsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
