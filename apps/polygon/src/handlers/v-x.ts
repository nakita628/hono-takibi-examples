import type { RouteHandler } from '@hono/zod-openapi'
import type { getVXReferenceIposRoute, getVXReferenceTickersIdEventsRoute } from '../routes'

export const getVXReferenceIposRouteHandler: RouteHandler<typeof getVXReferenceIposRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getVXReferenceTickersIdEventsRouteHandler: RouteHandler<
  typeof getVXReferenceTickersIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
