import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKGuestGuestSpaceIdV1PluginJsonRoute,
  deleteKV1PluginJsonRoute,
  getKGuestGuestSpaceIdV1PluginAppsJsonRoute,
  getKGuestGuestSpaceIdV1PluginsJsonRoute,
  getKGuestGuestSpaceIdV1PluginsRequiredJsonRoute,
  getKV1PluginAppsJsonRoute,
  getKV1PluginsJsonRoute,
  getKV1PluginsRequiredJsonRoute,
  postKGuestGuestSpaceIdV1PluginJsonRoute,
  postKV1PluginJsonRoute,
  putKGuestGuestSpaceIdV1PluginJsonRoute,
  putKV1PluginJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pluginsHandler = app
  .openapi(deleteKGuestGuestSpaceIdV1PluginJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1PluginJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PluginJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PluginAppsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PluginsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PluginsRequiredJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKV1PluginJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1PluginJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PluginJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PluginAppsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PluginsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PluginsRequiredJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
