import type { RouteHandler } from '@hono/zod-openapi'
import type { putImportLensRoute } from '../routes'

export const putImportLensRouteHandler: RouteHandler<typeof putImportLensRoute> = async (c) => {
  throw new Error('Not implemented')
}
