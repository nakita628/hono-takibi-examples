import type { RouteHandler } from '@hono/zod-openapi'
import type { putImportComponentRoute } from '../routes'

export const putImportComponentRouteHandler: RouteHandler<typeof putImportComponentRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
