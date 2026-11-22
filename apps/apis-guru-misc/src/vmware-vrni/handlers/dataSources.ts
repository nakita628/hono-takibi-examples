import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDataSourcesAristaSwitchesIdRoute,
  deleteDataSourcesBrocadeSwitchesIdRoute,
  deleteDataSourcesCheckpointFirewallsIdRoute,
  deleteDataSourcesCiscoSwitchesIdRoute,
  deleteDataSourcesDellSwitchesIdRoute,
  deleteDataSourcesHpovManagersIdRoute,
  deleteDataSourcesHpvcManagersIdRoute,
  deleteDataSourcesJuniperSwitchesIdRoute,
  deleteDataSourcesNsxvManagersIdRoute,
  deleteDataSourcesPanoramaFirewallsIdRoute,
  deleteDataSourcesUcsManagersIdRoute,
  deleteDataSourcesVcentersIdRoute,
  getDataSourcesAristaSwitchesIdRoute,
  getDataSourcesAristaSwitchesIdSnmpConfigRoute,
  getDataSourcesAristaSwitchesRoute,
  getDataSourcesBrocadeSwitchesIdRoute,
  getDataSourcesBrocadeSwitchesIdSnmpConfigRoute,
  getDataSourcesBrocadeSwitchesRoute,
  getDataSourcesCheckpointFirewallsIdRoute,
  getDataSourcesCheckpointFirewallsRoute,
  getDataSourcesCiscoSwitchesIdRoute,
  getDataSourcesCiscoSwitchesIdSnmpConfigRoute,
  getDataSourcesCiscoSwitchesRoute,
  getDataSourcesDellSwitchesIdRoute,
  getDataSourcesDellSwitchesIdSnmpConfigRoute,
  getDataSourcesDellSwitchesRoute,
  getDataSourcesHpovManagersIdRoute,
  getDataSourcesHpovManagersRoute,
  getDataSourcesHpvcManagersIdRoute,
  getDataSourcesHpvcManagersRoute,
  getDataSourcesJuniperSwitchesIdRoute,
  getDataSourcesJuniperSwitchesIdSnmpConfigRoute,
  getDataSourcesJuniperSwitchesRoute,
  getDataSourcesNsxvManagersIdControllerClusterRoute,
  getDataSourcesNsxvManagersIdRoute,
  getDataSourcesNsxvManagersRoute,
  getDataSourcesPanoramaFirewallsIdRoute,
  getDataSourcesPanoramaFirewallsRoute,
  getDataSourcesUcsManagersIdRoute,
  getDataSourcesUcsManagersIdSnmpConfigRoute,
  getDataSourcesUcsManagersRoute,
  getDataSourcesVcentersIdRoute,
  getDataSourcesVcentersRoute,
  postDataSourcesAristaSwitchesIdDisableRoute,
  postDataSourcesAristaSwitchesIdEnableRoute,
  postDataSourcesAristaSwitchesRoute,
  postDataSourcesBrocadeSwitchesIdDisableRoute,
  postDataSourcesBrocadeSwitchesIdEnableRoute,
  postDataSourcesBrocadeSwitchesRoute,
  postDataSourcesCheckpointFirewallsIdDisableRoute,
  postDataSourcesCheckpointFirewallsIdEnableRoute,
  postDataSourcesCheckpointFirewallsRoute,
  postDataSourcesCiscoSwitchesIdDisableRoute,
  postDataSourcesCiscoSwitchesIdEnableRoute,
  postDataSourcesCiscoSwitchesRoute,
  postDataSourcesDellSwitchesIdDisableRoute,
  postDataSourcesDellSwitchesIdEnableRoute,
  postDataSourcesDellSwitchesRoute,
  postDataSourcesHpovManagersIdDisableRoute,
  postDataSourcesHpovManagersIdEnableRoute,
  postDataSourcesHpovManagersRoute,
  postDataSourcesHpvcManagersIdDisableRoute,
  postDataSourcesHpvcManagersIdEnableRoute,
  postDataSourcesHpvcManagersRoute,
  postDataSourcesJuniperSwitchesIdDisableRoute,
  postDataSourcesJuniperSwitchesIdEnableRoute,
  postDataSourcesJuniperSwitchesRoute,
  postDataSourcesNsxvManagersIdDisableRoute,
  postDataSourcesNsxvManagersIdEnableRoute,
  postDataSourcesNsxvManagersRoute,
  postDataSourcesPanoramaFirewallsIdDisableRoute,
  postDataSourcesPanoramaFirewallsIdEnableRoute,
  postDataSourcesPanoramaFirewallsRoute,
  postDataSourcesUcsManagersIdDisableRoute,
  postDataSourcesUcsManagersIdEnableRoute,
  postDataSourcesUcsManagersRoute,
  postDataSourcesVcentersIdDisableRoute,
  postDataSourcesVcentersIdEnableRoute,
  postDataSourcesVcentersRoute,
  putDataSourcesAristaSwitchesIdRoute,
  putDataSourcesAristaSwitchesIdSnmpConfigRoute,
  putDataSourcesBrocadeSwitchesIdRoute,
  putDataSourcesBrocadeSwitchesIdSnmpConfigRoute,
  putDataSourcesCheckpointFirewallsIdRoute,
  putDataSourcesCiscoSwitchesIdRoute,
  putDataSourcesCiscoSwitchesIdSnmpConfigRoute,
  putDataSourcesDellSwitchesIdRoute,
  putDataSourcesDellSwitchesIdSnmpConfigRoute,
  putDataSourcesHpovManagersIdRoute,
  putDataSourcesHpvcManagersIdRoute,
  putDataSourcesJuniperSwitchesIdRoute,
  putDataSourcesJuniperSwitchesIdSnmpConfigRoute,
  putDataSourcesNsxvManagersIdControllerClusterRoute,
  putDataSourcesNsxvManagersIdRoute,
  putDataSourcesPanoramaFirewallsIdRoute,
  putDataSourcesUcsManagersIdRoute,
  putDataSourcesUcsManagersIdSnmpConfigRoute,
  putDataSourcesVcentersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataSourcesHandler = app
  .openapi(getDataSourcesAristaSwitchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesAristaSwitchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataSourcesAristaSwitchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesAristaSwitchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesAristaSwitchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesAristaSwitchesIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesAristaSwitchesIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesAristaSwitchesIdSnmpConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesAristaSwitchesIdSnmpConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesBrocadeSwitchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesBrocadeSwitchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataSourcesBrocadeSwitchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesBrocadeSwitchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesBrocadeSwitchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesBrocadeSwitchesIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesBrocadeSwitchesIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesBrocadeSwitchesIdSnmpConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesBrocadeSwitchesIdSnmpConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesCheckpointFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesCheckpointFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataSourcesCheckpointFirewallsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesCheckpointFirewallsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesCheckpointFirewallsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesCheckpointFirewallsIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesCheckpointFirewallsIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesCiscoSwitchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesCiscoSwitchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataSourcesCiscoSwitchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesCiscoSwitchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesCiscoSwitchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesCiscoSwitchesIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesCiscoSwitchesIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesCiscoSwitchesIdSnmpConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesCiscoSwitchesIdSnmpConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesDellSwitchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesDellSwitchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataSourcesDellSwitchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesDellSwitchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesDellSwitchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesDellSwitchesIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesDellSwitchesIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesDellSwitchesIdSnmpConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesDellSwitchesIdSnmpConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesHpovManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesHpovManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataSourcesHpovManagersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesHpovManagersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesHpovManagersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesHpovManagersIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesHpovManagersIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesHpvcManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesHpvcManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataSourcesHpvcManagersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesHpvcManagersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesHpvcManagersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesHpvcManagersIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesHpvcManagersIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesJuniperSwitchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesJuniperSwitchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataSourcesJuniperSwitchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesJuniperSwitchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesJuniperSwitchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesJuniperSwitchesIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesJuniperSwitchesIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesJuniperSwitchesIdSnmpConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesJuniperSwitchesIdSnmpConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesNsxvManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesNsxvManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataSourcesNsxvManagersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesNsxvManagersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesNsxvManagersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesNsxvManagersIdControllerClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesNsxvManagersIdControllerClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesNsxvManagersIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesNsxvManagersIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesPanoramaFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesPanoramaFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataSourcesPanoramaFirewallsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesPanoramaFirewallsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesPanoramaFirewallsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesPanoramaFirewallsIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesPanoramaFirewallsIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesUcsManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesUcsManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataSourcesUcsManagersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesUcsManagersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesUcsManagersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesUcsManagersIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesUcsManagersIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesUcsManagersIdSnmpConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesUcsManagersIdSnmpConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesVcentersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesVcentersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataSourcesVcentersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataSourcesVcentersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataSourcesVcentersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesVcentersIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataSourcesVcentersIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
