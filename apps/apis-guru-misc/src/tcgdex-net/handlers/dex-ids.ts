import type { RouteHandler } from '@hono/zod-openapi'
import type { getDexIdsDexIdRoute, getDexIdsRoute } from '../routes'

export const getDexIdsRouteHandler: RouteHandler<typeof getDexIdsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDexIdsDexIdRouteHandler: RouteHandler<typeof getDexIdsDexIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
