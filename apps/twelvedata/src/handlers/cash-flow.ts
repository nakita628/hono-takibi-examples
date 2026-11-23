import type { RouteHandler } from '@hono/zod-openapi'
import type { getCashFlowConsolidatedRoute, getCashFlowRoute } from '../routes'

export const getCashFlowRouteHandler: RouteHandler<typeof getCashFlowRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCashFlowConsolidatedRouteHandler: RouteHandler<
  typeof getCashFlowConsolidatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
