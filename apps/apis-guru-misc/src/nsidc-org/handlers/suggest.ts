import type { RouteHandler } from '@hono/zod-openapi'
import type { getSuggestRoute } from '../routes'

export const getSuggestRouteHandler: RouteHandler<typeof getSuggestRoute> = async (c) => {
  throw new Error('Not implemented')
}
