import type { RouteHandler } from '@hono/zod-openapi'
import type { postImportExportedRoute, postImportOpenapiRoute } from '../routes'

export const postImportExportedRouteHandler: RouteHandler<typeof postImportExportedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postImportOpenapiRouteHandler: RouteHandler<typeof postImportOpenapiRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
