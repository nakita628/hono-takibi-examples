import type { RouteHandler } from '@hono/zod-openapi'
import type { getActiveViolationsRoute } from '../routes'

export const getActiveViolationsRouteHandler: RouteHandler<
  typeof getActiveViolationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
