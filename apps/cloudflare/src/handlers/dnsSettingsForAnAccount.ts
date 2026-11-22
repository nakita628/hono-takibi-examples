import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountOrZoneAccountOrZoneIdDnsSettingsRoute,
  getAccountsAccountIdDnsSettingsRoute,
  patchAccountOrZoneAccountOrZoneIdDnsSettingsRoute,
  patchAccountsAccountIdDnsSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dnsSettingsForAnAccountHandler = app
  .openapi(getAccountsAccountIdDnsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdDnsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdDnsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountOrZoneAccountOrZoneIdDnsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
