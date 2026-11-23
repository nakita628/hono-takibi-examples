import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteSourceServerRoute } from '../routes'

export const postDeleteSourceServerRouteHandler: RouteHandler<
  typeof postDeleteSourceServerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
