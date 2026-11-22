import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionVpnTunnelsVpnTunnelRoute,
  getProjectsProjectAggregatedVpnTunnelsRoute,
  getProjectsProjectRegionsRegionVpnTunnelsRoute,
  getProjectsProjectRegionsRegionVpnTunnelsVpnTunnelRoute,
  postProjectsProjectRegionsRegionVpnTunnelsResourceSetLabelsRoute,
  postProjectsProjectRegionsRegionVpnTunnelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vpnTunnelsHandler = app
  .openapi(getProjectsProjectAggregatedVpnTunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionVpnTunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionVpnTunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionVpnTunnelsResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionVpnTunnelsVpnTunnelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionVpnTunnelsVpnTunnelRoute, (c) => {
    throw new Error('Not implemented')
  })
