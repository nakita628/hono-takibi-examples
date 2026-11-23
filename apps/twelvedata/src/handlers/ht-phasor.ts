import type { RouteHandler } from '@hono/zod-openapi'
import type { getHtPhasorRoute } from '../routes'

export const getHtPhasorRouteHandler: RouteHandler<typeof getHtPhasorRoute> = async (c) => {
  throw new Error('Not implemented')
}
