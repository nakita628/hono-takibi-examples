import type { RouteHandler } from '@hono/zod-openapi'
import type { getPartnersRoute } from '../routes'

export const getPartnersRouteHandler: RouteHandler<typeof getPartnersRoute> = async (c) => {
  throw new Error('Not implemented')
}
