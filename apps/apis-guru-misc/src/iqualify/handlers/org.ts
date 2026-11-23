import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrgRoute } from '../routes'

export const getOrgRouteHandler: RouteHandler<typeof getOrgRoute> = async (c) => {
  throw new Error('Not implemented')
}
