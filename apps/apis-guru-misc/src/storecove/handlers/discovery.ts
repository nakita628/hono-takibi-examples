import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDiscoveryIdentifiersRoute,
  postDiscoveryExistsRoute,
  postDiscoveryReceivesRoute,
} from '../routes'

export const postDiscoveryExistsRouteHandler: RouteHandler<
  typeof postDiscoveryExistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDiscoveryIdentifiersRouteHandler: RouteHandler<
  typeof getDiscoveryIdentifiersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDiscoveryReceivesRouteHandler: RouteHandler<
  typeof postDiscoveryReceivesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
