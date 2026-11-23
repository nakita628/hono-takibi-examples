import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateInstanceExportTaskRoute,
  postActionCreateInstanceExportTaskRoute,
} from '../routes'

export const getActionCreateInstanceExportTaskRouteHandler: RouteHandler<
  typeof getActionCreateInstanceExportTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateInstanceExportTaskRouteHandler: RouteHandler<
  typeof postActionCreateInstanceExportTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}
