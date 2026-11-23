import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventsIdIndexRoute, getEventsIndexRoute } from '../routes'

export const getEventsIndexRouteHandler: RouteHandler<typeof getEventsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsIdIndexRouteHandler: RouteHandler<typeof getEventsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
