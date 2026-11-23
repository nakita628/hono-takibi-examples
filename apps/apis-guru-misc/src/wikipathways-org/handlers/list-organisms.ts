import type { RouteHandler } from '@hono/zod-openapi'
import type { getListOrganismsRoute } from '../routes'

export const getListOrganismsRouteHandler: RouteHandler<typeof getListOrganismsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
