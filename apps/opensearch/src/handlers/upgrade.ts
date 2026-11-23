import type { RouteHandler } from '@hono/zod-openapi'
import type { getUpgradeRoute, postUpgradeRoute } from '../routes'

export const getUpgradeRouteHandler: RouteHandler<typeof getUpgradeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUpgradeRouteHandler: RouteHandler<typeof postUpgradeRoute> = async (c) => {
  throw new Error('Not implemented')
}
