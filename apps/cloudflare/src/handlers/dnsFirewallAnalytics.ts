import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdDnsFirewallDnsFirewallIdDnsAnalyticsReportBytimeRoute,
  getAccountsAccountIdDnsFirewallDnsFirewallIdDnsAnalyticsReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dnsFirewallAnalyticsHandler = app
  .openapi(getAccountsAccountIdDnsFirewallDnsFirewallIdDnsAnalyticsReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDnsFirewallDnsFirewallIdDnsAnalyticsReportBytimeRoute, (c) => {
    throw new Error('Not implemented')
  })
