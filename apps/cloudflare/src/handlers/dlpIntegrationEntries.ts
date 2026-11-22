import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDlpEntriesIntegrationEntryIdRoute,
  postAccountsAccountIdDlpEntriesIntegrationRoute,
  putAccountsAccountIdDlpEntriesIntegrationEntryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpIntegrationEntriesHandler = app
  .openapi(postAccountsAccountIdDlpEntriesIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpEntriesIntegrationEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpEntriesIntegrationEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
