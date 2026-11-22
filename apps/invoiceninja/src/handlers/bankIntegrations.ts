import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1BankIntegrationsIdRoute,
  getApiV1BankIntegrationsCreateRoute,
  getApiV1BankIntegrationsIdEditRoute,
  getApiV1BankIntegrationsIdRoute,
  getApiV1BankIntegrationsRoute,
  postApiV1BankIntegrationsBulkRoute,
  postApiV1BankIntegrationsGetTransactionsAccountIdRoute,
  postApiV1BankIntegrationsRefreshAccountsRoute,
  postApiV1BankIntegrationsRemoveAccountAccountIdRoute,
  postApiV1BankIntegrationsRoute,
  putApiV1BankIntegrationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bankIntegrationsHandler = app
  .openapi(getApiV1BankIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BankIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BankIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankIntegrationsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankIntegrationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankIntegrationsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankIntegrationsRefreshAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankIntegrationsRemoveAccountAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankIntegrationsGetTransactionsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
