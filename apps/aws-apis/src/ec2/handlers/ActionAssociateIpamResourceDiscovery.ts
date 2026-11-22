import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssociateIpamResourceDiscoveryRoute,
  postActionAssociateIpamResourceDiscoveryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAssociateIpamResourceDiscoveryHandler = app
  .openapi(getActionAssociateIpamResourceDiscoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateIpamResourceDiscoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
