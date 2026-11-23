import type { RouteHandler } from '@hono/zod-openapi'
import type { getRateTableRoute } from '../routes'

export const getRateTableRouteHandler: RouteHandler<typeof getRateTableRoute> = async (c) => {
  throw new Error('Not implemented')
}
