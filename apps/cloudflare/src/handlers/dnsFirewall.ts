import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDnsFirewallDnsFirewallIdRoute,
  getAccountsAccountIdDnsFirewallDnsFirewallIdReverseDnsRoute,
  getAccountsAccountIdDnsFirewallDnsFirewallIdRoute,
  getAccountsAccountIdDnsFirewallRoute,
  patchAccountsAccountIdDnsFirewallDnsFirewallIdReverseDnsRoute,
  patchAccountsAccountIdDnsFirewallDnsFirewallIdRoute,
  postAccountsAccountIdDnsFirewallRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dnsFirewallHandler = app
  .openapi(getAccountsAccountIdDnsFirewallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDnsFirewallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDnsFirewallDnsFirewallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDnsFirewallDnsFirewallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdDnsFirewallDnsFirewallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDnsFirewallDnsFirewallIdReverseDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdDnsFirewallDnsFirewallIdReverseDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
