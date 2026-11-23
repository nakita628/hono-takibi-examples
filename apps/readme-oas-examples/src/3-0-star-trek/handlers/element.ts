import type { RouteHandler } from '@hono/zod-openapi'
import type { getElementRoute, getElementSearchRoute, postElementSearchRoute } from '../routes'

export const getElementRouteHandler: RouteHandler<typeof getElementRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getElementSearchRouteHandler: RouteHandler<typeof getElementSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postElementSearchRouteHandler: RouteHandler<typeof postElementSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
