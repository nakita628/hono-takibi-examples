import type { RouteHandler } from '@hono/zod-openapi'
import type { getIndexPhpSettingsAdminLogDownloadRoute } from '../routes'

export const getIndexPhpSettingsAdminLogDownloadRouteHandler: RouteHandler<
  typeof getIndexPhpSettingsAdminLogDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
