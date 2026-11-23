import type { RouteHandler } from '@hono/zod-openapi'
import type { getInboxUploadsRoute } from '../routes'

export const getInboxUploadsRouteHandler: RouteHandler<typeof getInboxUploadsRoute> = async (c) => {
  throw new Error('Not implemented')
}
