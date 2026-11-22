import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionVpnGatewaysVpnGatewayRoute,
  getProjectsProjectAggregatedVpnGatewaysRoute,
  getProjectsProjectRegionsRegionVpnGatewaysRoute,
  getProjectsProjectRegionsRegionVpnGatewaysVpnGatewayGetStatusRoute,
  getProjectsProjectRegionsRegionVpnGatewaysVpnGatewayRoute,
  postProjectsProjectRegionsRegionVpnGatewaysResourceSetLabelsRoute,
  postProjectsProjectRegionsRegionVpnGatewaysResourceTestIamPermissionsRoute,
  postProjectsProjectRegionsRegionVpnGatewaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vpnGatewaysHandler = app
  .openapi(getProjectsProjectAggregatedVpnGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionVpnGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionVpnGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionVpnGatewaysResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionVpnGatewaysResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionVpnGatewaysVpnGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionVpnGatewaysVpnGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionVpnGatewaysVpnGatewayGetStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
