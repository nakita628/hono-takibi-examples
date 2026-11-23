import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListMetricStreamsRoute, postActionListMetricStreamsRoute } from '../routes'

export const getActionListMetricStreamsRouteHandler: RouteHandler<
  typeof getActionListMetricStreamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListMetricStreamsRouteHandler: RouteHandler<
  typeof postActionListMetricStreamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
