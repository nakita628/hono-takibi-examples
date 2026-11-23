import type { RouteHandler } from '@hono/zod-openapi'
import type { getDatanewbusinessFunctionsRoute, getDatanewbusinessTokenRoute } from '../routes'

export const getDatanewbusinessFunctionsRouteHandler: RouteHandler<
  typeof getDatanewbusinessFunctionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatanewbusinessTokenRouteHandler: RouteHandler<
  typeof getDatanewbusinessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
