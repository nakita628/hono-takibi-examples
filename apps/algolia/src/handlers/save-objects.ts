import type { RouteHandler } from '@hono/zod-openapi'
import type { getSaveObjectsRoute } from '../routes'

export const getSaveObjectsRouteHandler: RouteHandler<typeof getSaveObjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}
