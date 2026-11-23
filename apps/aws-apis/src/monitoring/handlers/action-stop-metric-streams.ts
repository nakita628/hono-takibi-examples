import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionStopMetricStreamsRoute, postActionStopMetricStreamsRoute } from '../routes'

export const getActionStopMetricStreamsRouteHandler: RouteHandler<
  typeof getActionStopMetricStreamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStopMetricStreamsRouteHandler: RouteHandler<
  typeof postActionStopMetricStreamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
