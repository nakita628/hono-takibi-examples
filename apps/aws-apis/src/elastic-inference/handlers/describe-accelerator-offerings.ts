import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeAcceleratorOfferingsRoute } from '../routes'

export const postDescribeAcceleratorOfferingsRouteHandler: RouteHandler<
  typeof postDescribeAcceleratorOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
