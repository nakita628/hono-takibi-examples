import type { RouteHandler } from '@hono/zod-openapi'
import type { getNvinfoRoute } from '../routes'

export const getNvinfoRouteHandler: RouteHandler<typeof getNvinfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
