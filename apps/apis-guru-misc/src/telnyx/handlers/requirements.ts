import type { RouteHandler } from '@hono/zod-openapi'
import type { getRequirementsIdRoute, getRequirementsRoute } from '../routes'

export const getRequirementsRouteHandler: RouteHandler<typeof getRequirementsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRequirementsIdRouteHandler: RouteHandler<typeof getRequirementsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
