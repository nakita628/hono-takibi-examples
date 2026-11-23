import type { RouteHandler } from '@hono/zod-openapi'
import type { getDagWarningsRoute } from '../routes'

export const getDagWarningsRouteHandler: RouteHandler<typeof getDagWarningsRoute> = async (c) => {
  throw new Error('Not implemented')
}
