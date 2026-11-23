import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListEndpointsByPlatformApplicationRoute,
  postActionListEndpointsByPlatformApplicationRoute,
} from '../routes'

export const getActionListEndpointsByPlatformApplicationRouteHandler: RouteHandler<
  typeof getActionListEndpointsByPlatformApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListEndpointsByPlatformApplicationRouteHandler: RouteHandler<
  typeof postActionListEndpointsByPlatformApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
