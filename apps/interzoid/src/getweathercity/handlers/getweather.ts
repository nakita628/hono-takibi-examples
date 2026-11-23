import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetweatherRoute } from '../routes'

export const getGetweatherRouteHandler: RouteHandler<typeof getGetweatherRoute> = async (c) => {
  throw new Error('Not implemented')
}
