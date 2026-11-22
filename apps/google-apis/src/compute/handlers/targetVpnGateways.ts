import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionTargetVpnGatewaysTargetVpnGatewayRoute,
  getProjectsProjectAggregatedTargetVpnGatewaysRoute,
  getProjectsProjectRegionsRegionTargetVpnGatewaysRoute,
  getProjectsProjectRegionsRegionTargetVpnGatewaysTargetVpnGatewayRoute,
  postProjectsProjectRegionsRegionTargetVpnGatewaysResourceSetLabelsRoute,
  postProjectsProjectRegionsRegionTargetVpnGatewaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetVpnGatewaysHandler = app
  .openapi(getProjectsProjectAggregatedTargetVpnGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionTargetVpnGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionTargetVpnGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionTargetVpnGatewaysResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionTargetVpnGatewaysTargetVpnGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionTargetVpnGatewaysTargetVpnGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
