import type { RouteHandler } from '@hono/zod-openapi'
import type { getMobileNetworkOperatorsRoute } from '../routes'

export const getMobileNetworkOperatorsRouteHandler: RouteHandler<
  typeof getMobileNetworkOperatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
