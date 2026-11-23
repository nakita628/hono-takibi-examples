import type { RouteHandler } from '@hono/zod-openapi'
import type { getSchemaIndexRoute } from '../routes'

export const getSchemaIndexRouteHandler: RouteHandler<typeof getSchemaIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
