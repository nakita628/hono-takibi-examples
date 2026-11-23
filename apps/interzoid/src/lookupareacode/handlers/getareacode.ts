import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetareacodeRoute } from '../routes'

export const getGetareacodeRouteHandler: RouteHandler<typeof getGetareacodeRoute> = async (c) => {
  throw new Error('Not implemented')
}
