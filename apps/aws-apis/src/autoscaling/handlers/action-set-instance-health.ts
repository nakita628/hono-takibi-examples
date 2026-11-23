import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSetInstanceHealthRoute, postActionSetInstanceHealthRoute } from '../routes'

export const getActionSetInstanceHealthRouteHandler: RouteHandler<
  typeof getActionSetInstanceHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetInstanceHealthRouteHandler: RouteHandler<
  typeof postActionSetInstanceHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}
