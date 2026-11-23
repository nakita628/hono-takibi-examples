import type { RouteHandler } from '@hono/zod-openapi'
import type { getCookiesRoute } from '../routes'

export const getCookiesRouteHandler: RouteHandler<typeof getCookiesRoute> = async (c) => {
  throw new Error('Not implemented')
}
