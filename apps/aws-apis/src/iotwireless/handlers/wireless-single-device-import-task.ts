import type { RouteHandler } from '@hono/zod-openapi'
import type { postWirelessSingleDeviceImportTaskRoute } from '../routes'

export const postWirelessSingleDeviceImportTaskRouteHandler: RouteHandler<
  typeof postWirelessSingleDeviceImportTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}
