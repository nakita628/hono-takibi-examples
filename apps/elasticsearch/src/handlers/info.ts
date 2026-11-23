import type { RouteHandler } from '@hono/zod-openapi'
import type { getInfoTargetRoute } from '../routes'

export const getInfoTargetRouteHandler: RouteHandler<typeof getInfoTargetRoute> = async (c) => {
  throw new Error('Not implemented')
}
