import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetCreateChannelTargetsRoute } from '../routes'

export const postGetCreateChannelTargetsRouteHandler: RouteHandler<
  typeof postGetCreateChannelTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
