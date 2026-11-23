import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSendEmailRoute, postActionSendEmailRoute } from '../routes'

export const getActionSendEmailRouteHandler: RouteHandler<typeof getActionSendEmailRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionSendEmailRouteHandler: RouteHandler<
  typeof postActionSendEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}
