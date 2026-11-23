import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCancelExportTaskRoute, postActionCancelExportTaskRoute } from '../routes'

export const getActionCancelExportTaskRouteHandler: RouteHandler<
  typeof getActionCancelExportTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCancelExportTaskRouteHandler: RouteHandler<
  typeof postActionCancelExportTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}
