import type { RouteHandler } from '@hono/zod-openapi'
import type { postOrdersCancelRoute, postOrdersRoute } from '../routes'

export const postOrdersRouteHandler: RouteHandler<typeof postOrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrdersCancelRouteHandler: RouteHandler<typeof postOrdersCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
