import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetIpamDiscoveredResourceCidrsRoute,
  postActionGetIpamDiscoveredResourceCidrsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetIpamDiscoveredResourceCidrsHandler = app
  .openapi(getActionGetIpamDiscoveredResourceCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetIpamDiscoveredResourceCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
