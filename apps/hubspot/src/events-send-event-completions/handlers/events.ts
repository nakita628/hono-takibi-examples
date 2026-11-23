import type { RouteHandler } from '@hono/zod-openapi'
import type { postEvents202609SendBatchRoute, postEvents202609SendRoute } from '../routes'

export const postEvents202609SendRouteHandler: RouteHandler<
  typeof postEvents202609SendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEvents202609SendBatchRouteHandler: RouteHandler<
  typeof postEvents202609SendBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
