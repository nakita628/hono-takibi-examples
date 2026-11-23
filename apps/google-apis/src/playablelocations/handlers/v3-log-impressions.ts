import type { RouteHandler } from '@hono/zod-openapi'
import type { postV3LogImpressionsRoute } from '../routes'

export const postV3LogImpressionsRouteHandler: RouteHandler<
  typeof postV3LogImpressionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
