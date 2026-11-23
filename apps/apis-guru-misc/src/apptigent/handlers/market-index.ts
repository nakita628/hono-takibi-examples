import type { RouteHandler } from '@hono/zod-openapi'
import type { postMarketIndexRoute } from '../routes'

export const postMarketIndexRouteHandler: RouteHandler<typeof postMarketIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
