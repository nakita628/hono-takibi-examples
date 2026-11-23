import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNetworkRoutesIdRoute,
  getNetworkRoutesIdRoute,
  getNetworkRoutesRoute,
  postNetworkRoutesRoute,
} from '../routes'

export const getNetworkRoutesRouteHandler: RouteHandler<typeof getNetworkRoutesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postNetworkRoutesRouteHandler: RouteHandler<typeof postNetworkRoutesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteNetworkRoutesIdRouteHandler: RouteHandler<
  typeof deleteNetworkRoutesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworkRoutesIdRouteHandler: RouteHandler<typeof getNetworkRoutesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
