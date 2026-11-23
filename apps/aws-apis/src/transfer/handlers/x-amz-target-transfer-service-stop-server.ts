import type { RouteHandler } from '@hono/zod-openapi'
import type { postXAmzTargetTransferServiceStopServerRoute } from '../routes'

export const postXAmzTargetTransferServiceStopServerRouteHandler: RouteHandler<
  typeof postXAmzTargetTransferServiceStopServerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
