import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdSecurityCenterPartnersPartnerSettingsRoute,
  getAccountsAccountIdSecurityCenterPartnersPartnerShadowZonesDomainHostsRoute,
  getAccountsAccountIdSecurityCenterPartnersPartnerShadowZonesRoute,
  getZonesZoneIdSecurityCenterPartnersPartnerShadowHostsRoute,
  postAccountsAccountIdSecurityCenterPartnersPartnerSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityCenterPartnersHandler = app
  .openapi(getAccountsAccountIdSecurityCenterPartnersPartnerSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSecurityCenterPartnersPartnerSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecurityCenterPartnersPartnerShadowZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecurityCenterPartnersPartnerShadowZonesDomainHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSecurityCenterPartnersPartnerShadowHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
