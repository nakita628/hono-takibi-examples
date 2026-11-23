import type { RouteHandler } from '@hono/zod-openapi'
import type { getAddonsIdIndexRoute, getAddonsIndexRoute } from '../routes'

export const getAddonsIndexRouteHandler: RouteHandler<typeof getAddonsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAddonsIdIndexRouteHandler: RouteHandler<typeof getAddonsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
