import type { RouteHandler } from '@hono/zod-openapi'
import type { getImportsImportIdRoute, postImportsIndexRoute } from '../routes'

export const getImportsImportIdRouteHandler: RouteHandler<typeof getImportsImportIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postImportsIndexRouteHandler: RouteHandler<typeof postImportsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
