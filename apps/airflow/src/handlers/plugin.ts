import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2PluginsImportErrorsRoute, getApiV2PluginsRoute } from '../routes'

const app = new OpenAPIHono()

export const pluginHandler = app
  .openapi(getApiV2PluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PluginsImportErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
