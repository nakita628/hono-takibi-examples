import type { RouteHandler } from '@hono/zod-openapi'
import type { getSongSearchRoute } from '../routes'

export const getSongSearchRouteHandler: RouteHandler<typeof getSongSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
