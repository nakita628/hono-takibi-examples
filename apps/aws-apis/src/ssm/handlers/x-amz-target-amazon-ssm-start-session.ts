import type { RouteHandler } from '@hono/zod-openapi'
import type { postXAmzTargetAmazonSSMStartSessionRoute } from '../routes'

export const postXAmzTargetAmazonSSMStartSessionRouteHandler: RouteHandler<
  typeof postXAmzTargetAmazonSSMStartSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
