import type { RouteHandler } from '@hono/zod-openapi'
import type { getCoppockRoute } from '../routes'

export const getCoppockRouteHandler: RouteHandler<typeof getCoppockRoute> = async (c) => {
  throw new Error('Not implemented')
}
