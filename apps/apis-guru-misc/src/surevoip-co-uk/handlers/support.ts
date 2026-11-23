import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSupportIpAddressRoute,
  getSupportServiceStatusRoute,
  postSupportEchoRoute,
} from '../routes'

export const postSupportEchoRouteHandler: RouteHandler<typeof postSupportEchoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSupportIpAddressRouteHandler: RouteHandler<
  typeof getSupportIpAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSupportServiceStatusRouteHandler: RouteHandler<
  typeof getSupportServiceStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
