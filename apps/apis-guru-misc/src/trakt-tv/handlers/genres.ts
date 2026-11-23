import type { RouteHandler } from '@hono/zod-openapi'
import type { getGenresTypeRoute } from '../routes'

export const getGenresTypeRouteHandler: RouteHandler<typeof getGenresTypeRoute> = async (c) => {
  throw new Error('Not implemented')
}
