import type { RouteHandler } from '@hono/zod-openapi'
import type { getIdRoute } from '../routes'

export const getIdRouteHandler: RouteHandler<typeof getIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
