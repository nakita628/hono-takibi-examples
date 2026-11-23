import type { RouteHandler } from '@hono/zod-openapi'
import type { getSchemaIblJsonRoute } from '../routes'

export const getSchemaIblJsonRouteHandler: RouteHandler<typeof getSchemaIblJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
