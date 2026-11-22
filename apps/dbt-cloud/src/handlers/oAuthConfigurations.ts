import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdOauthConfigurationsIdIndexRoute,
  getApiV3AccountsAccountIdOauthConfigurationsIdIndexRoute,
  getApiV3AccountsAccountIdOauthConfigurationsIndexRoute,
  postApiV3AccountsAccountIdOauthConfigurationsIdIndexRoute,
  postApiV3AccountsAccountIdOauthConfigurationsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthConfigurationsHandler = app
  .openapi(getApiV3AccountsAccountIdOauthConfigurationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdOauthConfigurationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdOauthConfigurationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdOauthConfigurationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdOauthConfigurationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
