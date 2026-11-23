import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionEnableFastLaunchRoute, postActionEnableFastLaunchRoute } from '../routes'

export const getActionEnableFastLaunchRouteHandler: RouteHandler<
  typeof getActionEnableFastLaunchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnableFastLaunchRouteHandler: RouteHandler<
  typeof postActionEnableFastLaunchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
