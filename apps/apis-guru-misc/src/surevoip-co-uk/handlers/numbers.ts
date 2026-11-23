import type { RouteHandler } from '@hono/zod-openapi'
import type { getNumbersAreacodesRoute, getNumbersRoute } from '../routes'

export const getNumbersRouteHandler: RouteHandler<typeof getNumbersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getNumbersAreacodesRouteHandler: RouteHandler<
  typeof getNumbersAreacodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
