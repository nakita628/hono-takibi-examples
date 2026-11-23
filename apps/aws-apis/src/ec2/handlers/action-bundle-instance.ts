import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionBundleInstanceRoute, postActionBundleInstanceRoute } from '../routes'

export const getActionBundleInstanceRouteHandler: RouteHandler<
  typeof getActionBundleInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionBundleInstanceRouteHandler: RouteHandler<
  typeof postActionBundleInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
