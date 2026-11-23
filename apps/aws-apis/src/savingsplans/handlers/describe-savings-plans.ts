import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeSavingsPlansRoute } from '../routes'

export const postDescribeSavingsPlansRouteHandler: RouteHandler<
  typeof postDescribeSavingsPlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}
