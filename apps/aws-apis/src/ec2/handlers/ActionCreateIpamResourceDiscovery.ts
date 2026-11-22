import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateIpamResourceDiscoveryRoute,
  postActionCreateIpamResourceDiscoveryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateIpamResourceDiscoveryHandler = app
  .openapi(getActionCreateIpamResourceDiscoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateIpamResourceDiscoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
