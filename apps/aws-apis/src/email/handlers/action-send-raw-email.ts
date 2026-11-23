import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSendRawEmailRoute, postActionSendRawEmailRoute } from '../routes'

export const getActionSendRawEmailRouteHandler: RouteHandler<
  typeof getActionSendRawEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSendRawEmailRouteHandler: RouteHandler<
  typeof postActionSendRawEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}
