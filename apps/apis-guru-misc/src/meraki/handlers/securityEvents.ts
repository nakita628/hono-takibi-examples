import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdSecurityEventsRoute,
  getOrganizationsOrganizationIdSecurityEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityEventsHandler = app
  .openapi(getNetworksNetworkIdSecurityEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSecurityEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
