import type { RouteHandler } from '@hono/zod-openapi'
import type { getConflictRoute, getConflictSearchRoute, postConflictSearchRoute } from '../routes'

export const getConflictRouteHandler: RouteHandler<typeof getConflictRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getConflictSearchRouteHandler: RouteHandler<typeof getConflictSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postConflictSearchRouteHandler: RouteHandler<typeof postConflictSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
