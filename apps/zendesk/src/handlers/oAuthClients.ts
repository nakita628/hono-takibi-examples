import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2OauthClientsOauthClientIdRoute,
  getApiV2OauthClientsOauthClientIdRoute,
  getApiV2OauthClientsRoute,
  getApiV2UsersMeOauthClientsRoute,
  postApiV2OauthClientsRoute,
  putApiV2OauthClientsOauthClientIdGenerateSecretRoute,
  putApiV2OauthClientsOauthClientIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthClientsHandler = app
  .openapi(getApiV2OauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OauthClientsOauthClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OauthClientsOauthClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OauthClientsOauthClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OauthClientsOauthClientIdGenerateSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersMeOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
