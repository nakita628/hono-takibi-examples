import type { RouteHandler } from '@hono/zod-openapi'
import type { putImportVmImageRoute } from '../routes'

export const putImportVmImageRouteHandler: RouteHandler<typeof putImportVmImageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
