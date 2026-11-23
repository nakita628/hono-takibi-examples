import type { RouteHandler } from '@hono/zod-openapi'
import type { postV4ReportsBatchGetRoute, postV4UserActivitySearchRoute } from '../routes'

export const postV4ReportsBatchGetRouteHandler: RouteHandler<
  typeof postV4ReportsBatchGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4UserActivitySearchRouteHandler: RouteHandler<
  typeof postV4UserActivitySearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
