import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeIpamResourceDiscoveryAssociationsRoute,
  postActionDescribeIpamResourceDiscoveryAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeIpamResourceDiscoveryAssociationsHandler = app
  .openapi(getActionDescribeIpamResourceDiscoveryAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeIpamResourceDiscoveryAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
