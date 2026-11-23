import type { RouteHandler } from '@hono/zod-openapi'
import type { getReferencesEntryIdRoute, getReferencesRoute } from '../routes'

export const getReferencesRouteHandler: RouteHandler<typeof getReferencesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReferencesEntryIdRouteHandler: RouteHandler<
  typeof getReferencesEntryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
