import type { RouteHandler } from '@hono/zod-openapi'
import type { getColorsRoute } from '../routes'

export const getColorsRouteHandler: RouteHandler<typeof getColorsRoute> = async (c) => {
  throw new Error('Not implemented')
}
