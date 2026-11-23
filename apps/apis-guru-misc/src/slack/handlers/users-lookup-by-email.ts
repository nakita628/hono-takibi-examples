import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsersLookupByEmailRoute } from '../routes'

export const getUsersLookupByEmailRouteHandler: RouteHandler<
  typeof getUsersLookupByEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}
