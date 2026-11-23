import type { RouteHandler } from '@hono/zod-openapi'
import type { getCallReasonsRoute, postCallReasonsValidateRoute } from '../routes'

export const getCallReasonsRouteHandler: RouteHandler<typeof getCallReasonsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCallReasonsValidateRouteHandler: RouteHandler<
  typeof postCallReasonsValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
