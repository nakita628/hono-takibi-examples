import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksIdRoute,
  getNetworksIdActionsActionIdRoute,
  getNetworksIdActionsRoute,
  getNetworksIdRoute,
  getNetworksRoute,
  postNetworksIdActionsAddRouteRoute,
  postNetworksIdActionsAddSubnetRoute,
  postNetworksIdActionsChangeIpRangeRoute,
  postNetworksIdActionsChangeProtectionRoute,
  postNetworksIdActionsDeleteRouteRoute,
  postNetworksIdActionsDeleteSubnetRoute,
  postNetworksRoute,
  putNetworksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networksHandler = app
  .openapi(getNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
