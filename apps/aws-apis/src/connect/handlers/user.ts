import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserFederateInstanceIdRoute } from '../routes'

export const getUserFederateInstanceIdRouteHandler: RouteHandler<
  typeof getUserFederateInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
