import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrganizationsRoute, postOrganizationsRoute } from '../routes'

export const postOrganizationsRouteHandler: RouteHandler<typeof postOrganizationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOrganizationsRouteHandler: RouteHandler<typeof getOrganizationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
