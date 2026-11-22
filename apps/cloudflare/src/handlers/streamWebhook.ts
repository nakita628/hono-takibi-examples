import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdStreamWebhookRoute,
  getAccountsAccountIdStreamWebhookRoute,
  putAccountsAccountIdStreamWebhookRoute,
} from '../routes'

const app = new OpenAPIHono()

export const streamWebhookHandler = app
  .openapi(deleteAccountsAccountIdStreamWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStreamWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdStreamWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
