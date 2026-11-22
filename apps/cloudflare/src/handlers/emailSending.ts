import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdEmailSendingLimitsRoute,
  getAccountsAccountIdEmailSendingMessagesMessageIdRoute,
  getAccountsAccountIdEmailSendingReputationRoute,
  postAccountsAccountIdEmailSendingSendRawRoute,
  postAccountsAccountIdEmailSendingSendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailSendingHandler = app
  .openapi(getAccountsAccountIdEmailSendingLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSendingMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSendingReputationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSendingSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSendingSendRawRoute, (c) => {
    throw new Error('Not implemented')
  })
