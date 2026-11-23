import type { RouteHandler } from '@hono/zod-openapi'
import type { getVainfoRoute } from '../routes'

export const getVainfoRouteHandler: RouteHandler<typeof getVainfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
