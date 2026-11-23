import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrganizationsRoute, putOrganizationsRoute } from '../routes'

export const getOrganizationsRouteHandler: RouteHandler<typeof getOrganizationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putOrganizationsRouteHandler: RouteHandler<typeof putOrganizationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
