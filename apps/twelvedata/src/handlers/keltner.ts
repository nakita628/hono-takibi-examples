import type { RouteHandler } from '@hono/zod-openapi'
import type { getKeltnerRoute } from '../routes'

export const getKeltnerRouteHandler: RouteHandler<typeof getKeltnerRoute> = async (c) => {
  throw new Error('Not implemented')
}
