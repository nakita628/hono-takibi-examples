import type { RouteHandler } from '@hono/zod-openapi'
import type { getBinQuerybuilderJsonRoute, postBinQuerybuilderJsonRoute } from '../routes'

export const getBinQuerybuilderJsonRouteHandler: RouteHandler<
  typeof getBinQuerybuilderJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBinQuerybuilderJsonRouteHandler: RouteHandler<
  typeof postBinQuerybuilderJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
