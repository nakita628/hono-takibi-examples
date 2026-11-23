import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1EmailDisposableRoute } from '../routes'

export const getV1EmailDisposableRouteHandler: RouteHandler<
  typeof getV1EmailDisposableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
