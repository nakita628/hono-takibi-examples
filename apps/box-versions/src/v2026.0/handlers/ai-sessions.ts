import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteAiSessionsAiSessionIdRoute, getAiSessionsRoute } from '../routes'

export const getAiSessionsRouteHandler: RouteHandler<typeof getAiSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAiSessionsAiSessionIdRouteHandler: RouteHandler<
  typeof deleteAiSessionsAiSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
