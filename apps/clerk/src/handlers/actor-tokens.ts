import type { RouteHandler } from '@hono/zod-openapi'
import type { postActorTokensRoute, postActorTokensActorTokenIdRevokeRoute } from '../routes'

export const postActorTokensRouteHandler: RouteHandler<typeof postActorTokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postActorTokensActorTokenIdRevokeRouteHandler: RouteHandler<
  typeof postActorTokensActorTokenIdRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
