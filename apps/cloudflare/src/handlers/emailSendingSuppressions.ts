import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdEmailSendingSuppressionsSuppressionIdRoute,
  getAccountsAccountIdEmailSendingSuppressionsRoute,
  getAccountsAccountIdEmailSendingSuppressionsSuppressionIdRoute,
  patchAccountsAccountIdEmailSendingSuppressionsSuppressionIdRoute,
  postAccountsAccountIdEmailSendingSuppressionsBulkRoute,
  postAccountsAccountIdEmailSendingSuppressionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailSendingSuppressionsHandler = app
  .openapi(getAccountsAccountIdEmailSendingSuppressionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSendingSuppressionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSendingSuppressionsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdEmailSendingSuppressionsSuppressionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSendingSuppressionsSuppressionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdEmailSendingSuppressionsSuppressionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
