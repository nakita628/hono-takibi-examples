import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeDomainRoute } from '../routes'

export const postDescribeDomainRouteHandler: RouteHandler<typeof postDescribeDomainRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
