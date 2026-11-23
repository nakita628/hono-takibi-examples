import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountRoute, patchAccountRoute } from '../routes'

export const getAccountRouteHandler: RouteHandler<typeof getAccountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAccountRouteHandler: RouteHandler<typeof patchAccountRoute> = async (c) => {
  throw new Error('Not implemented')
}
