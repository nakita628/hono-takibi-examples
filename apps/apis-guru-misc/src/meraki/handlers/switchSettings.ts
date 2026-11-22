import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute,
  getNetworksNetworkIdSwitchSettingsMtuRoute,
  getNetworksNetworkIdSwitchSettingsMulticastRoute,
  getNetworksNetworkIdSwitchSettingsQosRulesOrderRoute,
  getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute,
  getNetworksNetworkIdSwitchSettingsQosRulesRoute,
  getNetworksNetworkIdSwitchSettingsRoute,
  getNetworksNetworkIdSwitchSettingsStormControlRoute,
  postNetworksNetworkIdSwitchSettingsQosRulesRoute,
  putNetworksNetworkIdSwitchSettingsMtuRoute,
  putNetworksNetworkIdSwitchSettingsMulticastRoute,
  putNetworksNetworkIdSwitchSettingsQosRulesOrderRoute,
  putNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute,
  putNetworksNetworkIdSwitchSettingsRoute,
  putNetworksNetworkIdSwitchSettingsStormControlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const switchSettingsHandler = app
  .openapi(getNetworksNetworkIdSwitchSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchSettingsMtuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchSettingsMtuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchSettingsMulticastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchSettingsMulticastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchSettingsQosRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchSettingsQosRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchSettingsQosRulesOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchSettingsQosRulesOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchSettingsStormControlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchSettingsStormControlRoute, (c) => {
    throw new Error('Not implemented')
  })
