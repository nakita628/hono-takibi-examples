import type { RouteHandler } from '@hono/zod-openapi'
import type { postContactsRoute } from '../routes'

export const postContactsRouteHandler: RouteHandler<typeof postContactsRoute> = async (c) => {
  throw new Error('Not implemented')
}
