import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetIpamDiscoveredAccountsRoute,
  postActionGetIpamDiscoveredAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetIpamDiscoveredAccountsHandler = app
  .openapi(getActionGetIpamDiscoveredAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetIpamDiscoveredAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
