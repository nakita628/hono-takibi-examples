import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetAssociatedIpv6PoolCidrsRoute,
  postActionGetAssociatedIpv6PoolCidrsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetAssociatedIpv6PoolCidrsHandler = app
  .openapi(getActionGetAssociatedIpv6PoolCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetAssociatedIpv6PoolCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
