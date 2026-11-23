import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProvidersCountRoute,
  getProvidersProviderIdRoute,
  getProvidersRoute,
} from '../routes'

export const getProvidersRouteHandler: RouteHandler<typeof getProvidersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getProvidersCountRouteHandler: RouteHandler<typeof getProvidersCountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getProvidersProviderIdRouteHandler: RouteHandler<
  typeof getProvidersProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
