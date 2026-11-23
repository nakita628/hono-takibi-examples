import type { RouteHandler } from '@hono/zod-openapi'
import type { getAsyncDownloadRoute } from '../routes'

export const getAsyncDownloadRouteHandler: RouteHandler<typeof getAsyncDownloadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
