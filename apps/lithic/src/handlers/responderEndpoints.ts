import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1ResponderEndpointsRoute,
  getV1IpRangesRoute,
  getV1ResponderEndpointsRoute,
  postV1ResponderEndpointsRoute,
} from '../routes'

export const deleteV1ResponderEndpointsRouteHandler: RouteHandler<
  typeof deleteV1ResponderEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ResponderEndpointsRouteHandler: RouteHandler<
  typeof getV1ResponderEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ResponderEndpointsRouteHandler: RouteHandler<
  typeof postV1ResponderEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IpRangesRouteHandler: RouteHandler<typeof getV1IpRangesRoute> = async (c) => {
  throw new Error('Not implemented')
}
