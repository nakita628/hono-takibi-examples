import type { RouteHandler } from '@hono/zod-openapi'
import type { getInboxRegistrationsRoute } from '../routes'

export const getInboxRegistrationsRouteHandler: RouteHandler<
  typeof getInboxRegistrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
