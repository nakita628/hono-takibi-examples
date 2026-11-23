import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdvancedAsyncFormatRoute, getAdvancedFormatRoute } from '../routes'

export const getAdvancedAsyncFormatRouteHandler: RouteHandler<
  typeof getAdvancedAsyncFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdvancedFormatRouteHandler: RouteHandler<typeof getAdvancedFormatRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
