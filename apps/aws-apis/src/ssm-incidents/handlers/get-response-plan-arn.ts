import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetResponsePlanArnRoute } from '../routes'

export const getGetResponsePlanArnRouteHandler: RouteHandler<
  typeof getGetResponsePlanArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
