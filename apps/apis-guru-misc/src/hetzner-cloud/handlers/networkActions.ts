import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksIdActionsActionIdRoute,
  getNetworksIdActionsRoute,
  postNetworksIdActionsAddRouteRoute,
  postNetworksIdActionsAddSubnetRoute,
  postNetworksIdActionsChangeIpRangeRoute,
  postNetworksIdActionsChangeProtectionRoute,
  postNetworksIdActionsDeleteRouteRoute,
  postNetworksIdActionsDeleteSubnetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkActionsHandler = app
  .openapi(getNetworksIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksIdActionsAddRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksIdActionsAddSubnetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksIdActionsChangeIpRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksIdActionsChangeProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksIdActionsDeleteRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksIdActionsDeleteSubnetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksIdActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
