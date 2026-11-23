import type { RouteHandler } from '@hono/zod-openapi'
import type { getListPathwaysRoute } from '../routes'

export const getListPathwaysRouteHandler: RouteHandler<typeof getListPathwaysRoute> = async (c) => {
  throw new Error('Not implemented')
}
