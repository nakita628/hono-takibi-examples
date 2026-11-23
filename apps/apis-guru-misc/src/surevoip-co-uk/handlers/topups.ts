import type { RouteHandler } from '@hono/zod-openapi'
import type { getTopupsRoute } from '../routes'

export const getTopupsRouteHandler: RouteHandler<typeof getTopupsRoute> = async (c) => {
  throw new Error('Not implemented')
}
