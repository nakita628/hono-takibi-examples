import type { RouteHandler } from '@hono/zod-openapi'
import type { postDownloadArchiveRoute, postDownloadInfoRoute } from '../routes'

export const postDownloadArchiveRouteHandler: RouteHandler<
  typeof postDownloadArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDownloadInfoRouteHandler: RouteHandler<typeof postDownloadInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
