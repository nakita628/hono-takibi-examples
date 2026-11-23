import type { RouteHandler } from '@hono/zod-openapi'
import type { postTemplatesApplyRoute, postTemplatesExportRoute } from '../routes'

export const postTemplatesApplyRouteHandler: RouteHandler<typeof postTemplatesApplyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTemplatesExportRouteHandler: RouteHandler<
  typeof postTemplatesExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
