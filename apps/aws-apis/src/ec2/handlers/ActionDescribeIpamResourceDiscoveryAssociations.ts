import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeIpamResourceDiscoveryAssociationsRoute,
  postActionDescribeIpamResourceDiscoveryAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeIpamResourceDiscoveryAssociationsHandler = app
  .openapi(getActionDescribeIpamResourceDiscoveryAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeIpamResourceDiscoveryAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
