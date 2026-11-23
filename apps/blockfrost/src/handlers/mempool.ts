import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMempoolAddressesAddressRoute,
  getMempoolHashRoute,
  getMempoolRoute,
} from '../routes'

export const getMempoolRouteHandler: RouteHandler<typeof getMempoolRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMempoolHashRouteHandler: RouteHandler<typeof getMempoolHashRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMempoolAddressesAddressRouteHandler: RouteHandler<
  typeof getMempoolAddressesAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
