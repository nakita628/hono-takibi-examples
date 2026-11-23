import type { RouteHandler } from '@hono/zod-openapi'
import type { postCallsParticipantsRemoveRoute } from '../routes'

export const postCallsParticipantsRemoveRouteHandler: RouteHandler<
  typeof postCallsParticipantsRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
