import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetTaxFormRoute } from '../routes'

export const postGetTaxFormRouteHandler: RouteHandler<typeof postGetTaxFormRoute> = async (c) => {
  throw new Error('Not implemented')
}
