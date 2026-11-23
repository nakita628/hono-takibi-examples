import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionStartExportTaskRoute, postActionStartExportTaskRoute } from '../routes'

export const getActionStartExportTaskRouteHandler: RouteHandler<
  typeof getActionStartExportTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStartExportTaskRouteHandler: RouteHandler<
  typeof postActionStartExportTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}
