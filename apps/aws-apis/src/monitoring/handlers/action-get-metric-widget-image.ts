import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetMetricWidgetImageRoute,
  postActionGetMetricWidgetImageRoute,
} from '../routes'

export const getActionGetMetricWidgetImageRouteHandler: RouteHandler<
  typeof getActionGetMetricWidgetImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetMetricWidgetImageRouteHandler: RouteHandler<
  typeof postActionGetMetricWidgetImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
