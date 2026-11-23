import type { RouteHandler } from '@hono/zod-openapi'
import type { getSmaRoute } from '../routes'

export const getSmaRouteHandler: RouteHandler<typeof getSmaRoute> = async (c) => {
  throw new Error('Not implemented')
}
