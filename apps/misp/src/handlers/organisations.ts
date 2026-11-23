import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrganisationsRoute, getOrganisationsViewOrganisationIdRoute } from '../routes'

export const getOrganisationsRouteHandler: RouteHandler<typeof getOrganisationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOrganisationsViewOrganisationIdRouteHandler: RouteHandler<
  typeof getOrganisationsViewOrganisationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
