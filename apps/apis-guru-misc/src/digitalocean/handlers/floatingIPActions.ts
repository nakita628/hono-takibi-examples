import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV2FloatingIpsFloatingIpActionsActionIdRoute,
  getV2FloatingIpsFloatingIpActionsRoute,
  postV2FloatingIpsFloatingIpActionsRoute,
} from '../routes'

export const getV2FloatingIpsFloatingIpActionsRouteHandler: RouteHandler<
  typeof getV2FloatingIpsFloatingIpActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2FloatingIpsFloatingIpActionsRouteHandler: RouteHandler<
  typeof postV2FloatingIpsFloatingIpActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2FloatingIpsFloatingIpActionsActionIdRouteHandler: RouteHandler<
  typeof getV2FloatingIpsFloatingIpActionsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
