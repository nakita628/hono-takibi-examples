import type { RouteHandler } from '@hono/zod-openapi'
import type { getSingerInfoRoute } from '../routes'

export const getSingerInfoRouteHandler: RouteHandler<typeof getSingerInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
