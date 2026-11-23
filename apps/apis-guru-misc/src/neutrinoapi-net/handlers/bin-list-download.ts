import type { RouteHandler } from '@hono/zod-openapi'
import type { getBinListDownloadRoute } from '../routes'

export const getBinListDownloadRouteHandler: RouteHandler<typeof getBinListDownloadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
