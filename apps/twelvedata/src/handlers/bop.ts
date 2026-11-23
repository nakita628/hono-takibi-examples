import type { RouteHandler } from '@hono/zod-openapi'
import type { getBopRoute } from '../routes'

export const getBopRouteHandler: RouteHandler<typeof getBopRoute> = async (c) => {
  throw new Error('Not implemented')
}
