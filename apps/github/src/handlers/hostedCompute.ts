import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRoute,
  getOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRoute,
  getOrgsOrgSettingsNetworkConfigurationsRoute,
  getOrgsOrgSettingsNetworkSettingsNetworkSettingsIdRoute,
  patchOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRoute,
  postOrgsOrgSettingsNetworkConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hostedComputeHandler = app
  .openapi(getOrgsOrgSettingsNetworkConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgSettingsNetworkConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgSettingsNetworkConfigurationsNetworkConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSettingsNetworkSettingsNetworkSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
