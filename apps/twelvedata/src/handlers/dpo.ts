import type { RouteHandler } from '@hono/zod-openapi'
import type { getDpoRoute } from '../routes'

export const getDpoRouteHandler: RouteHandler<typeof getDpoRoute> = async (c) => {
  throw new Error('Not implemented')
}
