import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationIdDeviceStatusesRoute,
  getOrganizationsOrganizationIdInventoryRoute,
  getOrganizationsOrganizationIdRoute,
  getOrganizationsOrganizationIdThirdPartyVPNPeersRoute,
  getOrganizationsOrganizationIdUplinksLossAndLatencyRoute,
  getOrganizationsRoute,
  postOrganizationsOrganizationIdClaimRoute,
  postOrganizationsOrganizationIdCloneRoute,
  putOrganizationsOrganizationIdThirdPartyVPNPeersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDeviceStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdThirdPartyVPNPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdThirdPartyVPNPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdUplinksLossAndLatencyRoute, (c) => {
    throw new Error('Not implemented')
  })
