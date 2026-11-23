import type { RouteHandler } from '@hono/zod-openapi'
import type { getMinusDmRoute } from '../routes'

export const getMinusDmRouteHandler: RouteHandler<typeof getMinusDmRoute> = async (c) => {
  throw new Error('Not implemented')
}
