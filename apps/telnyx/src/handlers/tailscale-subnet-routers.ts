import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTailscaleSubnetRoutersIdRoute,
  getTailscaleSubnetRoutersIdRoute,
  getTailscaleSubnetRoutersRoute,
  patchTailscaleSubnetRoutersIdRoute,
  postTailscaleSubnetRoutersRoute,
} from '../routes'

export const getTailscaleSubnetRoutersRouteHandler: RouteHandler<
  typeof getTailscaleSubnetRoutersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTailscaleSubnetRoutersRouteHandler: RouteHandler<
  typeof postTailscaleSubnetRoutersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTailscaleSubnetRoutersIdRouteHandler: RouteHandler<
  typeof deleteTailscaleSubnetRoutersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTailscaleSubnetRoutersIdRouteHandler: RouteHandler<
  typeof getTailscaleSubnetRoutersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTailscaleSubnetRoutersIdRouteHandler: RouteHandler<
  typeof patchTailscaleSubnetRoutersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
