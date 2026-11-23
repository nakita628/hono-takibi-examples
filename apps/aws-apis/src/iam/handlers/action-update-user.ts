import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUpdateUserRoute, postActionUpdateUserRoute } from '../routes'

export const getActionUpdateUserRouteHandler: RouteHandler<
  typeof getActionUpdateUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateUserRouteHandler: RouteHandler<
  typeof postActionUpdateUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
