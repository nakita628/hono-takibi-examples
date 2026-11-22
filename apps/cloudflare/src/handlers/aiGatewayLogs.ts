import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAiGatewayGatewaysGatewayIdLogsRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdLogsIdRequestRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdLogsIdResponseRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdLogsIdRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdLogsRoute,
  patchAccountsAccountIdAiGatewayGatewaysGatewayIdLogsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiGatewayLogsHandler = app
  .openapi(deleteAccountsAccountIdAiGatewayGatewaysGatewayIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdLogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAiGatewayGatewaysGatewayIdLogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdLogsIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdLogsIdResponseRoute, (c) => {
    throw new Error('Not implemented')
  })
