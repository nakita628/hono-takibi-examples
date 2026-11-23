import type { RouteHandler } from '@hono/zod-openapi'
import type { getMeRoute } from '../routes'

export const getMeRouteHandler: RouteHandler<typeof getMeRoute> = async (c) => {
  throw new Error('Not implemented')
}
