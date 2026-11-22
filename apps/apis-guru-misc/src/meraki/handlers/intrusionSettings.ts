import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdSecurityIntrusionSettingsRoute,
  getOrganizationsOrganizationIdSecurityIntrusionSettingsRoute,
  putNetworksNetworkIdSecurityIntrusionSettingsRoute,
  putOrganizationsOrganizationIdSecurityIntrusionSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const intrusionSettingsHandler = app
  .openapi(getNetworksNetworkIdSecurityIntrusionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSecurityIntrusionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSecurityIntrusionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdSecurityIntrusionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
