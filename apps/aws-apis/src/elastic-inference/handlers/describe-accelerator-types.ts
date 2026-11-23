import type { RouteHandler } from '@hono/zod-openapi'
import type { getDescribeAcceleratorTypesRoute } from '../routes'

export const getDescribeAcceleratorTypesRouteHandler: RouteHandler<
  typeof getDescribeAcceleratorTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
