import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateIpamResourceDiscoveryRoute,
  postActionDisassociateIpamResourceDiscoveryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDisassociateIpamResourceDiscoveryHandler = app
  .openapi(getActionDisassociateIpamResourceDiscoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateIpamResourceDiscoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
