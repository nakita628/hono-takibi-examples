import type { RouteHandler } from '@hono/zod-openapi'
import type { getContactsRoute, postContactsRoute } from '../routes'

export const getContactsRouteHandler: RouteHandler<typeof getContactsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postContactsRouteHandler: RouteHandler<typeof postContactsRoute> = async (c) => {
  throw new Error('Not implemented')
}
