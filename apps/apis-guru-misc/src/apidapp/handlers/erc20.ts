import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getErc20AddressRoute,
  getErc20Route,
  optionsErc20AddressRoute,
  optionsErc20Route,
  postErc20AddressRoute,
  postErc20Route,
} from '../routes'

export const getErc20RouteHandler: RouteHandler<typeof getErc20Route> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsErc20RouteHandler: RouteHandler<typeof optionsErc20Route> = async (c) => {
  throw new Error('Not implemented')
}

export const postErc20RouteHandler: RouteHandler<typeof postErc20Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getErc20AddressRouteHandler: RouteHandler<typeof getErc20AddressRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsErc20AddressRouteHandler: RouteHandler<
  typeof optionsErc20AddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postErc20AddressRouteHandler: RouteHandler<typeof postErc20AddressRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
