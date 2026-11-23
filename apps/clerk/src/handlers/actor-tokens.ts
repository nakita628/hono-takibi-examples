import type { RouteHandler } from '@hono/zod-openapi'
import type { postActorTokensActorTokenIdRevokeRoute, postActorTokensRoute } from '../routes'

export const postActorTokensRouteHandler: RouteHandler<typeof postActorTokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postActorTokensActorTokenIdRevokeRouteHandler: RouteHandler<
  typeof postActorTokensActorTokenIdRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
