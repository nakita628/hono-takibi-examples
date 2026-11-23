import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionStartMetricStreamsRoute, postActionStartMetricStreamsRoute } from '../routes'

export const getActionStartMetricStreamsRouteHandler: RouteHandler<
  typeof getActionStartMetricStreamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStartMetricStreamsRouteHandler: RouteHandler<
  typeof postActionStartMetricStreamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
