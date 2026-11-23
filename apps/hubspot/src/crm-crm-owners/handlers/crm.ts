import type { RouteHandler } from '@hono/zod-openapi'
import type { getCrmOwners202609OwnerIdRoute, getCrmOwners202609Route } from '../routes'

export const getCrmOwners202609RouteHandler: RouteHandler<typeof getCrmOwners202609Route> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCrmOwners202609OwnerIdRouteHandler: RouteHandler<
  typeof getCrmOwners202609OwnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
