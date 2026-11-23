import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNetworkTokensNetworkTokenIdRoute,
  patchNetworkTokensNetworkTokenIdRoute,
} from '../routes'

export const getNetworkTokensNetworkTokenIdRouteHandler: RouteHandler<
  typeof getNetworkTokensNetworkTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchNetworkTokensNetworkTokenIdRouteHandler: RouteHandler<
  typeof patchNetworkTokensNetworkTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
