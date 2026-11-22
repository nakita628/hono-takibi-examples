import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountOrZoneAccountOrZoneIdDnsRecordsUsageRoute,
  getAccountsAccountIdDnsRecordsUsageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dnsRecordsForAnAccountHandler = app
  .openapi(getAccountsAccountIdDnsRecordsUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdDnsRecordsUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
