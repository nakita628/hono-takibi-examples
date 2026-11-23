import type { RouteHandler } from '@hono/zod-openapi'
import type { getSarRoute } from '../routes'

export const getSarRouteHandler: RouteHandler<typeof getSarRoute> = async (c) => {
  throw new Error('Not implemented')
}
