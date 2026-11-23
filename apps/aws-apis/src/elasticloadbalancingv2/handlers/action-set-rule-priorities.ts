import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSetRulePrioritiesRoute, postActionSetRulePrioritiesRoute } from '../routes'

export const getActionSetRulePrioritiesRouteHandler: RouteHandler<
  typeof getActionSetRulePrioritiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetRulePrioritiesRouteHandler: RouteHandler<
  typeof postActionSetRulePrioritiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
