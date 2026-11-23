import type { RouteHandler } from '@hono/zod-openapi'
import type { getFacilitiesRoute } from '../routes'

export const getFacilitiesRouteHandler: RouteHandler<typeof getFacilitiesRoute> = async (c) => {
  throw new Error('Not implemented')
}
