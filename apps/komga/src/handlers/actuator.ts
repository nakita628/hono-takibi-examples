import type { RouteHandler } from '@hono/zod-openapi'
import type { getActuatorInfoRoute } from '../routes'

export const getActuatorInfoRouteHandler: RouteHandler<typeof getActuatorInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
