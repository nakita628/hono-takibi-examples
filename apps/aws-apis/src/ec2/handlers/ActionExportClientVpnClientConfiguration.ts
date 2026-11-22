import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionExportClientVpnClientConfigurationRoute,
  postActionExportClientVpnClientConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionExportClientVpnClientConfigurationHandler = app
  .openapi(getActionExportClientVpnClientConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionExportClientVpnClientConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
