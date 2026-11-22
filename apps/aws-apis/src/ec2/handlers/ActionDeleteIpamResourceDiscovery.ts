import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteIpamResourceDiscoveryRoute,
  postActionDeleteIpamResourceDiscoveryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteIpamResourceDiscoveryHandler = app
  .openapi(getActionDeleteIpamResourceDiscoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteIpamResourceDiscoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
