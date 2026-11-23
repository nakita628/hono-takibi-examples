import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionActionIdRoute, postActionTriggerRoute } from '../routes'

export const getActionActionIdRouteHandler: RouteHandler<typeof getActionActionIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionTriggerRouteHandler: RouteHandler<typeof postActionTriggerRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
