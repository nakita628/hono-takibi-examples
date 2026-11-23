import type { RouteHandler } from '@hono/zod-openapi'
import type { postXAmzTargetSageMakerCreateModelRoute } from '../routes'

export const postXAmzTargetSageMakerCreateModelRouteHandler: RouteHandler<
  typeof postXAmzTargetSageMakerCreateModelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
