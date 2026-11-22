import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationsOktaAccountsAccountIdRoute,
  getApiV2IntegrationsOktaAccountsAccountIdRoute,
  getApiV2IntegrationsOktaAccountsRoute,
  patchApiV2IntegrationsOktaAccountsAccountIdRoute,
  postApiV2IntegrationsOktaAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oktaIntegrationHandler = app
  .openapi(getApiV2IntegrationsOktaAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationsOktaAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationsOktaAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationsOktaAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationsOktaAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
