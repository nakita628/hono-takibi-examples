import type { RouteHandler } from '@hono/zod-openapi'
import type { getPpoRoute } from '../routes'

export const getPpoRouteHandler: RouteHandler<typeof getPpoRoute> = async (c) => {
  throw new Error('Not implemented')
}
