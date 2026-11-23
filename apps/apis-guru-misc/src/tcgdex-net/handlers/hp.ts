import type { RouteHandler } from '@hono/zod-openapi'
import type { getHpHpRoute, getHpRoute } from '../routes'

export const getHpRouteHandler: RouteHandler<typeof getHpRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHpHpRouteHandler: RouteHandler<typeof getHpHpRoute> = async (c) => {
  throw new Error('Not implemented')
}
