import type { RouteHandler } from '@hono/zod-openapi'
import type { getCorrectionSearchRoute } from '../routes'

export const getCorrectionSearchRouteHandler: RouteHandler<
  typeof getCorrectionSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
