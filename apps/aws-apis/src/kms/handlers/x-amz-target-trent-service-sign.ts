import type { RouteHandler } from '@hono/zod-openapi'
import type { postXAmzTargetTrentServiceSignRoute } from '../routes'

export const postXAmzTargetTrentServiceSignRouteHandler: RouteHandler<
  typeof postXAmzTargetTrentServiceSignRoute
> = async (c) => {
  throw new Error('Not implemented')
}
