import type { RouteHandler } from '@hono/zod-openapi'
import type { postPayoutsRoute } from '../routes'

export const postPayoutsRouteHandler: RouteHandler<typeof postPayoutsRoute> = async (c) => {
  throw new Error('Not implemented')
}
