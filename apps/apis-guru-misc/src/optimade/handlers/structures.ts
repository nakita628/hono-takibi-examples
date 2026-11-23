import type { RouteHandler } from '@hono/zod-openapi'
import type { getStructuresEntryIdRoute, getStructuresRoute } from '../routes'

export const getStructuresRouteHandler: RouteHandler<typeof getStructuresRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStructuresEntryIdRouteHandler: RouteHandler<
  typeof getStructuresEntryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
