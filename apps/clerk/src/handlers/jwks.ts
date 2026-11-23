import type { RouteHandler } from '@hono/zod-openapi'
import type { getJwksRoute } from '../routes'

export const getJwksRouteHandler: RouteHandler<typeof getJwksRoute> = async (c) => {
  throw new Error('Not implemented')
}
