import type { RouteHandler } from '@hono/zod-openapi'
import type { getInboxRecipientsRoute, postInboxRecipientsRoute } from '../routes'

export const getInboxRecipientsRouteHandler: RouteHandler<typeof getInboxRecipientsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postInboxRecipientsRouteHandler: RouteHandler<
  typeof postInboxRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
