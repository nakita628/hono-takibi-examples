import type { RouteHandler } from '@hono/zod-openapi'
import type { getVisitorsRoute, postVisitorsConvertRoute, putVisitorsRoute } from '../routes'

export const putVisitorsRouteHandler: RouteHandler<typeof putVisitorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVisitorsRouteHandler: RouteHandler<typeof getVisitorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVisitorsConvertRouteHandler: RouteHandler<
  typeof postVisitorsConvertRoute
> = async (c) => {
  throw new Error('Not implemented')
}
