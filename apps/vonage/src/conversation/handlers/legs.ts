import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteLegsLegIdRoute, getLegsRoute } from '../routes'

export const getLegsRouteHandler: RouteHandler<typeof getLegsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLegsLegIdRouteHandler: RouteHandler<typeof deleteLegsLegIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
