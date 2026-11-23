import type { RouteHandler } from '@hono/zod-openapi'
import type { postXAmzTargetAmazonSSMGetParameterRoute } from '../routes'

export const postXAmzTargetAmazonSSMGetParameterRouteHandler: RouteHandler<
  typeof postXAmzTargetAmazonSSMGetParameterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
