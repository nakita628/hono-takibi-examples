import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdSnmpSettingsRoute,
  getOrganizationsOrganizationIdSnmpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snmpSettingsHandler = app
  .openapi(getNetworksNetworkIdSnmpSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSnmpRoute, (c) => {
    throw new Error('Not implemented')
  })
