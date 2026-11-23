import type { RouteHandler } from '@hono/zod-openapi'
import type { getGenresRoute } from '../routes'

export const getGenresRouteHandler: RouteHandler<typeof getGenresRoute> = async (c) => {
  throw new Error('Not implemented')
}
