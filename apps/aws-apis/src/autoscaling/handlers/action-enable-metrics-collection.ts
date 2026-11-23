import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionEnableMetricsCollectionRoute,
  postActionEnableMetricsCollectionRoute,
} from '../routes'

export const getActionEnableMetricsCollectionRouteHandler: RouteHandler<
  typeof getActionEnableMetricsCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnableMetricsCollectionRouteHandler: RouteHandler<
  typeof postActionEnableMetricsCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
