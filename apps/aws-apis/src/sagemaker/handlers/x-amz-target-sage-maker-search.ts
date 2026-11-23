import type { RouteHandler } from '@hono/zod-openapi'
import type { postXAmzTargetSageMakerSearchRoute } from '../routes'

export const postXAmzTargetSageMakerSearchRouteHandler: RouteHandler<
  typeof postXAmzTargetSageMakerSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
