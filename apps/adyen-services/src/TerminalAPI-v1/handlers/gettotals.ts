import type { RouteHandler } from '@hono/zod-openapi'
import type { postGettotalsRoute } from '../routes'

export const postGettotalsRouteHandler: RouteHandler<typeof postGettotalsRoute> = async (c) => {
  throw new Error('Not implemented')
}
