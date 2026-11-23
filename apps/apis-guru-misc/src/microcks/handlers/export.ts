import type { RouteHandler } from '@hono/zod-openapi'
import type { getExportRoute } from '../routes'

export const getExportRouteHandler: RouteHandler<typeof getExportRoute> = async (c) => {
  throw new Error('Not implemented')
}
