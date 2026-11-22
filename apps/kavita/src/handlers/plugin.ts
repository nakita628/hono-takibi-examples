import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPluginAuthkeyExpiresRoute,
  getApiPluginParseRoute,
  getApiPluginVersionRoute,
  postApiPluginAuthenticateRoute,
  postApiPluginParseBulkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pluginHandler = app
  .openapi(postApiPluginAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPluginVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPluginAuthkeyExpiresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPluginParseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPluginParseBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
