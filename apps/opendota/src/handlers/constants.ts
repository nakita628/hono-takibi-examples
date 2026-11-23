import type { RouteHandler } from '@hono/zod-openapi'
import type { getConstantsResourceRoute } from '../routes'

export const getConstantsResourceRouteHandler: RouteHandler<
  typeof getConstantsResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
