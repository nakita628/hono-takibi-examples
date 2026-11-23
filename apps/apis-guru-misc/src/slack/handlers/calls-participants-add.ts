import type { RouteHandler } from '@hono/zod-openapi'
import type { postCallsParticipantsAddRoute } from '../routes'

export const postCallsParticipantsAddRouteHandler: RouteHandler<
  typeof postCallsParticipantsAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}
