import type { RouteHandler } from '@hono/zod-openapi'
import type { postListImageScanFindingsRoute } from '../routes'

export const postListImageScanFindingsRouteHandler: RouteHandler<
  typeof postListImageScanFindingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
