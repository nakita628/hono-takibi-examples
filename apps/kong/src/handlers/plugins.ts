import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePluginsPluginIdRoute,
  getPluginsPluginIdRoute,
  getPluginsRoute,
  patchPluginsPluginIdRoute,
  postPluginsRoute,
  putPluginsPluginIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pluginsHandler = app
  .openapi(getPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
