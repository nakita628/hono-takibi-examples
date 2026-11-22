import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRebalanceSlotsInGlobalReplicationGroupRoute,
  postActionRebalanceSlotsInGlobalReplicationGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRebalanceSlotsInGlobalReplicationGroupHandler = app
  .openapi(getActionRebalanceSlotsInGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRebalanceSlotsInGlobalReplicationGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
