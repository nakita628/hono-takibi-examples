import type { RouteHandler } from '@hono/zod-openapi'
import type { getTaskEventsIdIndexRoute, getTaskEventsIndexRoute } from '../routes'

export const getTaskEventsIndexRouteHandler: RouteHandler<typeof getTaskEventsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTaskEventsIdIndexRouteHandler: RouteHandler<
  typeof getTaskEventsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
