import type { RouteHandler } from '@hono/zod-openapi'
import type { getCoreVersionsRoute } from '../routes'

export const getCoreVersionsRouteHandler: RouteHandler<typeof getCoreVersionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
