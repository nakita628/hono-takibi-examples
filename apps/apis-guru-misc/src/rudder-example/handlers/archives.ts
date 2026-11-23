import type { RouteHandler } from '@hono/zod-openapi'
import type { getArchivesExportRoute, postArchivesImportRoute } from '../routes'

export const getArchivesExportRouteHandler: RouteHandler<typeof getArchivesExportRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postArchivesImportRouteHandler: RouteHandler<typeof postArchivesImportRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
