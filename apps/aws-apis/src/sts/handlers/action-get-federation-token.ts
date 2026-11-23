import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetFederationTokenRoute, postActionGetFederationTokenRoute } from '../routes'

export const getActionGetFederationTokenRouteHandler: RouteHandler<
  typeof getActionGetFederationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetFederationTokenRouteHandler: RouteHandler<
  typeof postActionGetFederationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
