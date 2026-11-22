import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2OauthTokensCurrentRoute,
  deleteApiV2OauthTokensOauthTokenIdRoute,
  getApiV2OauthTokensCurrentRoute,
  getApiV2OauthTokensOauthTokenIdRoute,
  getApiV2OauthTokensRoute,
  postApiV2OauthTokensDeleteManyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthTokensHandler = app
  .openapi(getApiV2OauthTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OauthTokensOauthTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OauthTokensOauthTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OauthTokensCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OauthTokensCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OauthTokensDeleteManyRoute, (c) => {
    throw new Error('Not implemented')
  })
