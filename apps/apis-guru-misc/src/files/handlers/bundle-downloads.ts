import type { RouteHandler } from '@hono/zod-openapi'
import type { getBundleDownloadsRoute } from '../routes'

export const getBundleDownloadsRouteHandler: RouteHandler<typeof getBundleDownloadsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
