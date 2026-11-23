import type { RouteHandler } from '@hono/zod-openapi'
import type { postPrintRoute } from '../routes'

export const postPrintRouteHandler: RouteHandler<typeof postPrintRoute> = async (c) => {
  throw new Error('Not implemented')
}
