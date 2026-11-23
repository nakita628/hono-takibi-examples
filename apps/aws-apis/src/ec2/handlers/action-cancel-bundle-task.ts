import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCancelBundleTaskRoute, postActionCancelBundleTaskRoute } from '../routes'

export const getActionCancelBundleTaskRouteHandler: RouteHandler<
  typeof getActionCancelBundleTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCancelBundleTaskRouteHandler: RouteHandler<
  typeof postActionCancelBundleTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}
