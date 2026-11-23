import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getResolveClusterNameRoute,
  getResolveClusterRoute,
  getResolveIndexNameRoute,
  postResolveIndexNameRoute,
} from '../routes'

export const getResolveClusterRouteHandler: RouteHandler<typeof getResolveClusterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getResolveClusterNameRouteHandler: RouteHandler<
  typeof getResolveClusterNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getResolveIndexNameRouteHandler: RouteHandler<
  typeof getResolveIndexNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postResolveIndexNameRouteHandler: RouteHandler<
  typeof postResolveIndexNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
