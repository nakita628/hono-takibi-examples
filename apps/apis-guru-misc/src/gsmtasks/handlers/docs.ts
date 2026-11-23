import type { RouteHandler } from '@hono/zod-openapi'
import type { getDocsSchemaIndexRoute } from '../routes'

export const getDocsSchemaIndexRouteHandler: RouteHandler<typeof getDocsSchemaIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
