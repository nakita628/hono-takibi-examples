import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteTokensRoute } from '../routes'

export const deleteTokensRouteHandler: RouteHandler<typeof deleteTokensRoute> = async (c) => {
  throw new Error('Not implemented')
}
