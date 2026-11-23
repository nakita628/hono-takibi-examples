import type { RouteHandler } from '@hono/zod-openapi'
import type { postManagedDataIdentifiersListRoute } from '../routes'

export const postManagedDataIdentifiersListRouteHandler: RouteHandler<
  typeof postManagedDataIdentifiersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
