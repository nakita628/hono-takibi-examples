import type { RouteHandler } from '@hono/zod-openapi'
import type { getMastersPgnGameIdRoute, getMastersRoute } from '../routes'

export const getMastersRouteHandler: RouteHandler<typeof getMastersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMastersPgnGameIdRouteHandler: RouteHandler<
  typeof getMastersPgnGameIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
