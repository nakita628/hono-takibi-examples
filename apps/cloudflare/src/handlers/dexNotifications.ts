import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdDexNotificationsNotificationIdOutcomesRoute,
  getAccountsAccountIdDexNotificationsRoute,
  postAccountsAccountIdDexNotificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dexNotificationsHandler = app
  .openapi(getAccountsAccountIdDexNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDexNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexNotificationsNotificationIdOutcomesRoute, (c) => {
    throw new Error('Not implemented')
  })
