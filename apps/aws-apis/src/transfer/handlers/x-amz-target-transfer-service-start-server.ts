import type { RouteHandler } from '@hono/zod-openapi'
import type { postXAmzTargetTransferServiceStartServerRoute } from '../routes'

export const postXAmzTargetTransferServiceStartServerRouteHandler: RouteHandler<
  typeof postXAmzTargetTransferServiceStartServerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
