import type { RouteHandler } from '@hono/zod-openapi'
import type { getImportErrorsImportErrorIdRoute, getImportErrorsRoute } from '../routes'

export const getImportErrorsRouteHandler: RouteHandler<typeof getImportErrorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getImportErrorsImportErrorIdRouteHandler: RouteHandler<
  typeof getImportErrorsImportErrorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
