import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBlockchainIdRoute,
  getBlockchainRoute,
  optionsBlockchainIdRoute,
  optionsBlockchainRoute,
} from '../routes'

export const getBlockchainRouteHandler: RouteHandler<typeof getBlockchainRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsBlockchainRouteHandler: RouteHandler<typeof optionsBlockchainRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBlockchainIdRouteHandler: RouteHandler<typeof getBlockchainIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsBlockchainIdRouteHandler: RouteHandler<
  typeof optionsBlockchainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
