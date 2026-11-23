import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSegmentsDataSeriesRoute,
  getSegmentsDetailsRoute,
  getSegmentsListRoute,
} from '../routes'

export const getSegmentsDataSeriesRouteHandler: RouteHandler<
  typeof getSegmentsDataSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSegmentsDetailsRouteHandler: RouteHandler<typeof getSegmentsDetailsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSegmentsListRouteHandler: RouteHandler<typeof getSegmentsListRoute> = async (c) => {
  throw new Error('Not implemented')
}
