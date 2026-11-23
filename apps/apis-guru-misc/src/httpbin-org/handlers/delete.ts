import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteDeleteRoute } from '../routes'

export const deleteDeleteRouteHandler: RouteHandler<typeof deleteDeleteRoute> = async (c) => {
  throw new Error('Not implemented')
}
