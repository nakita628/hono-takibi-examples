import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDisableFastLaunchRoute, postActionDisableFastLaunchRoute } from '../routes'

export const getActionDisableFastLaunchRouteHandler: RouteHandler<
  typeof getActionDisableFastLaunchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisableFastLaunchRouteHandler: RouteHandler<
  typeof postActionDisableFastLaunchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
