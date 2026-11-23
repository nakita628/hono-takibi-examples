import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSendTemplatedEmailRoute, postActionSendTemplatedEmailRoute } from '../routes'

export const getActionSendTemplatedEmailRouteHandler: RouteHandler<
  typeof getActionSendTemplatedEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSendTemplatedEmailRouteHandler: RouteHandler<
  typeof postActionSendTemplatedEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}
