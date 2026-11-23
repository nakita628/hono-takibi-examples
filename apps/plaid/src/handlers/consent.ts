import type { RouteHandler } from '@hono/zod-openapi'
import type { postConsentEventsGetRoute } from '../routes'

export const postConsentEventsGetRouteHandler: RouteHandler<
  typeof postConsentEventsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
