import type { RouteHandler } from '@hono/zod-openapi'
import type { getCongressCongressRoute, getCongressCurrentRoute, getCongressRoute } from '../routes'

export const getCongressRouteHandler: RouteHandler<typeof getCongressRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCongressCongressRouteHandler: RouteHandler<
  typeof getCongressCongressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCongressCurrentRouteHandler: RouteHandler<typeof getCongressCurrentRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
