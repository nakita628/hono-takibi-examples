import type { RouteHandler } from '@hono/zod-openapi'
import type { getCopyJobsCopyJobIdRoute, getCopyJobsIndexRoute, putCopyJobsRoute } from '../routes'

export const getCopyJobsCopyJobIdRouteHandler: RouteHandler<
  typeof getCopyJobsCopyJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCopyJobsIndexRouteHandler: RouteHandler<typeof getCopyJobsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putCopyJobsRouteHandler: RouteHandler<typeof putCopyJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}
