import type { RouteHandler } from '@hono/zod-openapi'
import type { getBundlesBundleIdRoute, getBundlesRoute, postBundlesBundleIdRoute } from '../routes'

export const getBundlesBundleIdRouteHandler: RouteHandler<typeof getBundlesBundleIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postBundlesBundleIdRouteHandler: RouteHandler<
  typeof postBundlesBundleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBundlesRouteHandler: RouteHandler<typeof getBundlesRoute> = async (c) => {
  throw new Error('Not implemented')
}
