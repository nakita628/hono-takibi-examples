import type { RouteHandler } from '@hono/zod-openapi'
import type { getContactsRoute } from '../routes'

export const getContactsRouteHandler: RouteHandler<typeof getContactsRoute> = async (c) => {
  throw new Error('Not implemented')
}
