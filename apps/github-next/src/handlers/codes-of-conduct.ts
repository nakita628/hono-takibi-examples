import type { RouteHandler } from '@hono/zod-openapi'
import type { getCodesOfConductKeyRoute, getCodesOfConductRoute } from '../routes'

export const getCodesOfConductRouteHandler: RouteHandler<typeof getCodesOfConductRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCodesOfConductKeyRouteHandler: RouteHandler<
  typeof getCodesOfConductKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
