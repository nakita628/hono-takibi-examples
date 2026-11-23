import type { RouteHandler } from '@hono/zod-openapi'
import type { getWirelessDeviceImportTasksRoute } from '../routes'

export const getWirelessDeviceImportTasksRouteHandler: RouteHandler<
  typeof getWirelessDeviceImportTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
