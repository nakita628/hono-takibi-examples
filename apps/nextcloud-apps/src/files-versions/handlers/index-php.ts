import type { RouteHandler } from '@hono/zod-openapi'
import type { getIndexPhpAppsFilesVersionsPreviewRoute } from '../routes'

export const getIndexPhpAppsFilesVersionsPreviewRouteHandler: RouteHandler<
  typeof getIndexPhpAppsFilesVersionsPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}
