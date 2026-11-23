import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdvisoriesGhsaIdRoute, getAdvisoriesRoute } from '../routes'

export const getAdvisoriesRouteHandler: RouteHandler<typeof getAdvisoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdvisoriesGhsaIdRouteHandler: RouteHandler<
  typeof getAdvisoriesGhsaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
