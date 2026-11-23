import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisableMetricsCollectionRoute,
  postActionDisableMetricsCollectionRoute,
} from '../routes'

export const getActionDisableMetricsCollectionRouteHandler: RouteHandler<
  typeof getActionDisableMetricsCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisableMetricsCollectionRouteHandler: RouteHandler<
  typeof postActionDisableMetricsCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
