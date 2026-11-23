import type { RouteHandler } from '@hono/zod-openapi'
import type { getRecipientsRoute } from '../routes'

export const getRecipientsRouteHandler: RouteHandler<typeof getRecipientsRoute> = async (c) => {
  throw new Error('Not implemented')
}
