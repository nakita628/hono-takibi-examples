import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdBotnetFeedConfigsAsnAsnIdRoute,
  getAccountsAccountIdBotnetFeedAsnAsnIdDayReportRoute,
  getAccountsAccountIdBotnetFeedAsnAsnIdFullReportRoute,
  getAccountsAccountIdBotnetFeedConfigsAsnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const botnetThreatFeedHandler = app
  .openapi(getAccountsAccountIdBotnetFeedAsnAsnIdDayReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBotnetFeedAsnAsnIdFullReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBotnetFeedConfigsAsnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdBotnetFeedConfigsAsnAsnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
