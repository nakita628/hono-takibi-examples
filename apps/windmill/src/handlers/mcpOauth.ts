import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMcpOauthCallbackRoute,
  getMcpOauthStartRoute,
  postMcpOauthDiscoverRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mcpOauthHandler = app
  .openapi(postMcpOauthDiscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMcpOauthStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMcpOauthCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
