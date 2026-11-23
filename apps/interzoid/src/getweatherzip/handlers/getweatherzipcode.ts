import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetweatherzipcodeRoute } from '../routes'

export const getGetweatherzipcodeRouteHandler: RouteHandler<
  typeof getGetweatherzipcodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
