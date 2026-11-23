import type { RouteHandler } from '@hono/zod-openapi'
import type { postImportApplicationUsageRoute } from '../routes'

export const postImportApplicationUsageRouteHandler: RouteHandler<
  typeof postImportApplicationUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
