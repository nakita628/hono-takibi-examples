import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdAiGatewayLoggingStateRoute,
  getAccountsAccountIdBuildsAccountLimitsRoute,
  getAccountsAccountIdContainersUsageRoute,
  patchAccountsAccountIdAiGatewayLoggingStateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getAccountsAccountIdAiGatewayLoggingStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAiGatewayLoggingStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBuildsAccountLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdContainersUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
