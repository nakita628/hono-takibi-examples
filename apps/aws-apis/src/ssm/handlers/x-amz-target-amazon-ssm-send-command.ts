import type { RouteHandler } from '@hono/zod-openapi'
import type { postXAmzTargetAmazonSSMSendCommandRoute } from '../routes'

export const postXAmzTargetAmazonSSMSendCommandRouteHandler: RouteHandler<
  typeof postXAmzTargetAmazonSSMSendCommandRoute
> = async (c) => {
  throw new Error('Not implemented')
}
