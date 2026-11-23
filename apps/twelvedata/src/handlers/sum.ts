import type { RouteHandler } from '@hono/zod-openapi'
import type { getSumRoute } from '../routes'

export const getSumRouteHandler: RouteHandler<typeof getSumRoute> = async (c) => {
  throw new Error('Not implemented')
}
