import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCancelImportTaskRoute, postActionCancelImportTaskRoute } from '../routes'

export const getActionCancelImportTaskRouteHandler: RouteHandler<
  typeof getActionCancelImportTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCancelImportTaskRouteHandler: RouteHandler<
  typeof postActionCancelImportTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}
