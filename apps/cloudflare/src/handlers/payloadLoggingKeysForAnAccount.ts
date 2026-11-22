import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountOrZoneAccountOrZoneIdFirewallPayloadLoggingKeyRoute,
  deleteAccountsAccountIdFirewallPayloadLoggingKeyRoute,
  getAccountOrZoneAccountOrZoneIdFirewallPayloadLoggingKeyRoute,
  getAccountsAccountIdFirewallPayloadLoggingKeyRoute,
  putAccountOrZoneAccountOrZoneIdFirewallPayloadLoggingKeyRoute,
  putAccountsAccountIdFirewallPayloadLoggingKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payloadLoggingKeysForAnAccountHandler = app
  .openapi(deleteAccountsAccountIdFirewallPayloadLoggingKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdFirewallPayloadLoggingKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdFirewallPayloadLoggingKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrZoneAccountOrZoneIdFirewallPayloadLoggingKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdFirewallPayloadLoggingKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdFirewallPayloadLoggingKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
