import type { RouteHandler } from '@hono/zod-openapi'
import type { getSmsRoute } from '../routes'

export const getSmsRouteHandler: RouteHandler<typeof getSmsRoute> = async (c) => {
  throw new Error('Not implemented')
}
