import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationIdVpnFirewallRulesRoute,
  putOrganizationsOrganizationIdVpnFirewallRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mxvpnFirewallHandler = app
  .openapi(getOrganizationsOrganizationIdVpnFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdVpnFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
