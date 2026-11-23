import type { RouteHandler } from '@hono/zod-openapi'
import type { getMigrationExchangeRoute } from '../routes'

export const getMigrationExchangeRouteHandler: RouteHandler<
  typeof getMigrationExchangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
