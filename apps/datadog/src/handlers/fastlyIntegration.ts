import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationsFastlyAccountsAccountIdRoute,
  deleteApiV2IntegrationsFastlyAccountsAccountIdServicesServiceIdRoute,
  getApiV2IntegrationsFastlyAccountsAccountIdRoute,
  getApiV2IntegrationsFastlyAccountsAccountIdServicesRoute,
  getApiV2IntegrationsFastlyAccountsAccountIdServicesServiceIdRoute,
  getApiV2IntegrationsFastlyAccountsRoute,
  patchApiV2IntegrationsFastlyAccountsAccountIdRoute,
  patchApiV2IntegrationsFastlyAccountsAccountIdServicesServiceIdRoute,
  postApiV2IntegrationsFastlyAccountsAccountIdServicesRoute,
  postApiV2IntegrationsFastlyAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fastlyIntegrationHandler = app
  .openapi(getApiV2IntegrationsFastlyAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationsFastlyAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationsFastlyAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationsFastlyAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationsFastlyAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationsFastlyAccountsAccountIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationsFastlyAccountsAccountIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationsFastlyAccountsAccountIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationsFastlyAccountsAccountIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationsFastlyAccountsAccountIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
