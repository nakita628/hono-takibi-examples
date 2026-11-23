import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1beta1ParentDeliveryDataRoute } from '../routes'

export const getV1beta1ParentDeliveryDataRouteHandler: RouteHandler<
  typeof getV1beta1ParentDeliveryDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
