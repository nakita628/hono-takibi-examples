import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1beta1ParentActivitiesQueryRoute } from '../routes'

export const getV1beta1ParentActivitiesQueryRouteHandler: RouteHandler<
  typeof getV1beta1ParentActivitiesQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
