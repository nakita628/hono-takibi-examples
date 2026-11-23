import type { RouteHandler } from '@hono/zod-openapi'
import type { postTestInternetDownloadSpeedRoute } from '../routes'

export const postTestInternetDownloadSpeedRouteHandler: RouteHandler<
  typeof postTestInternetDownloadSpeedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
