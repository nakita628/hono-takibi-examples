import type { RouteHandler } from '@hono/zod-openapi'
import type { getRetrySegmentsRetrySegmentIdRoute } from '../routes'

export const getRetrySegmentsRetrySegmentIdRouteHandler: RouteHandler<
  typeof getRetrySegmentsRetrySegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
