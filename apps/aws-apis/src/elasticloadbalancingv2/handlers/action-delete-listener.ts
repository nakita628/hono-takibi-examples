import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteListenerRoute, postActionDeleteListenerRoute } from '../routes'

export const getActionDeleteListenerRouteHandler: RouteHandler<
  typeof getActionDeleteListenerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteListenerRouteHandler: RouteHandler<
  typeof postActionDeleteListenerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
