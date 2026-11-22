import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1TransferLimitsRoute } from '../routes'

export const getV1TransferLimitsRouteHandler: RouteHandler<
  typeof getV1TransferLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
