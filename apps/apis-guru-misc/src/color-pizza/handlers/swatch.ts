import type { RouteHandler } from '@hono/zod-openapi'
import type { getSwatchIndexRoute } from '../routes'

export const getSwatchIndexRouteHandler: RouteHandler<typeof getSwatchIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
