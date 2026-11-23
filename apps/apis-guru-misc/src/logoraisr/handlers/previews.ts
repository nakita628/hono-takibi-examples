import type { RouteHandler } from '@hono/zod-openapi'
import type { getPreviewsFileIdIndexRoute } from '../routes'

export const getPreviewsFileIdIndexRouteHandler: RouteHandler<
  typeof getPreviewsFileIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
