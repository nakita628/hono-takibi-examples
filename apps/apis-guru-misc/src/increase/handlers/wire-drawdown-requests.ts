import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWireDrawdownRequestsRoute,
  getWireDrawdownRequestsWireDrawdownRequestIdRoute,
  postWireDrawdownRequestsRoute,
} from '../routes'

export const getWireDrawdownRequestsRouteHandler: RouteHandler<
  typeof getWireDrawdownRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWireDrawdownRequestsRouteHandler: RouteHandler<
  typeof postWireDrawdownRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWireDrawdownRequestsWireDrawdownRequestIdRouteHandler: RouteHandler<
  typeof getWireDrawdownRequestsWireDrawdownRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
