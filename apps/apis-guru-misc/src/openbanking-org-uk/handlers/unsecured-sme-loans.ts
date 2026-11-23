import type { RouteHandler } from '@hono/zod-openapi'
import type { getUnsecuredSmeLoansRoute, headUnsecuredSmeLoansRoute } from '../routes'

export const getUnsecuredSmeLoansRouteHandler: RouteHandler<
  typeof getUnsecuredSmeLoansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headUnsecuredSmeLoansRouteHandler: RouteHandler<
  typeof headUnsecuredSmeLoansRoute
> = async (c) => {
  throw new Error('Not implemented')
}
