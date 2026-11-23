import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMcpOauthCallbackRoute,
  getMcpOauthStartRoute,
  getMcpWWorkspaceListToolsRoute,
  postMcpOauthDiscoverRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mcpHandler = app
  .openapi(getMcpWWorkspaceListToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMcpOauthDiscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMcpOauthStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMcpOauthCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
