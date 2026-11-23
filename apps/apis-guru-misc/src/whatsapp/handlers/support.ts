import type { RouteHandler } from '@hono/zod-openapi'
import type { getSupportRoute } from '../routes'

export const getSupportRouteHandler: RouteHandler<typeof getSupportRoute> = async (c) => {
  throw new Error('Not implemented')
}
