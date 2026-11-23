import type { RouteHandler } from '@hono/zod-openapi'
import type { getUvRoute } from '../routes'

export const getUvRouteHandler: RouteHandler<typeof getUvRoute> = async (c) => {
  throw new Error('Not implemented')
}
