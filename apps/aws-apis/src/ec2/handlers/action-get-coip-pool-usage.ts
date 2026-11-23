import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetCoipPoolUsageRoute, postActionGetCoipPoolUsageRoute } from '../routes'

export const getActionGetCoipPoolUsageRouteHandler: RouteHandler<
  typeof getActionGetCoipPoolUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetCoipPoolUsageRouteHandler: RouteHandler<
  typeof postActionGetCoipPoolUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
