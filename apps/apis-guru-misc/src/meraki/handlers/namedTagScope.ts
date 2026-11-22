import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute,
  getNetworksNetworkIdSmTargetGroupsRoute,
  getNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute,
  postNetworksNetworkIdSmTargetGroupsRoute,
  putNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const namedTagScopeHandler = app
  .openapi(getNetworksNetworkIdSmTargetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmTargetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
