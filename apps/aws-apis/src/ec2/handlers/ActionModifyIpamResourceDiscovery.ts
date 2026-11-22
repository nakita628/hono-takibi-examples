import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyIpamResourceDiscoveryRoute,
  postActionModifyIpamResourceDiscoveryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyIpamResourceDiscoveryHandler = app
  .openapi(getActionModifyIpamResourceDiscoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyIpamResourceDiscoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
