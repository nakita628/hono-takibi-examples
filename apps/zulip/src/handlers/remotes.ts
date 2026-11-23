import type { RouteHandler } from '@hono/zod-openapi'
import type { postRemotesPushE2eeRegisterRoute } from '../routes'

export const postRemotesPushE2eeRegisterRouteHandler: RouteHandler<
  typeof postRemotesPushE2eeRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
