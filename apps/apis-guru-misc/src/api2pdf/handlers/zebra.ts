import type { RouteHandler } from '@hono/zod-openapi'
import type { getZebraRoute } from '../routes'

export const getZebraRouteHandler: RouteHandler<typeof getZebraRoute> = async (c) => {
  throw new Error('Not implemented')
}
