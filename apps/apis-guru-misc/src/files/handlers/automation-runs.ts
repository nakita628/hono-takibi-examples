import type { RouteHandler } from '@hono/zod-openapi'
import type { getAutomationRunsIdRoute, getAutomationRunsRoute } from '../routes'

export const getAutomationRunsRouteHandler: RouteHandler<typeof getAutomationRunsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAutomationRunsIdRouteHandler: RouteHandler<
  typeof getAutomationRunsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
