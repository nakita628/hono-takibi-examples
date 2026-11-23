import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrganizationRoute } from '../routes'

export const getOrganizationRouteHandler: RouteHandler<typeof getOrganizationRoute> = async (c) => {
  throw new Error('Not implemented')
}
