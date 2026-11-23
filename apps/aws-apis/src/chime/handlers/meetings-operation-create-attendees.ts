import type { RouteHandler } from '@hono/zod-openapi'
import type { postMeetingsOperationCreateAttendeesRoute } from '../routes'

export const postMeetingsOperationCreateAttendeesRouteHandler: RouteHandler<
  typeof postMeetingsOperationCreateAttendeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
