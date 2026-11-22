import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdGatewayAuditSshSettingsRoute,
  postAccountsAccountIdGatewayAuditSshSettingsRotateSeedRoute,
  putAccountsAccountIdGatewayAuditSshSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustSSHSettingsHandler = app
  .openapi(getAccountsAccountIdGatewayAuditSshSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdGatewayAuditSshSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdGatewayAuditSshSettingsRotateSeedRoute, (c) => {
    throw new Error('Not implemented')
  })
