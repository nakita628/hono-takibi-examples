import type { RouteHandler } from '@hono/zod-openapi'
import type { getHookEventsRoute, getHookEventsSubjectTypeRoute } from '../routes'

export const getHookEventsRouteHandler: RouteHandler<typeof getHookEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHookEventsSubjectTypeRouteHandler: RouteHandler<
  typeof getHookEventsSubjectTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
