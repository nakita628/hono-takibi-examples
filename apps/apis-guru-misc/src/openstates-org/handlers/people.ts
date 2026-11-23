import type { RouteHandler } from '@hono/zod-openapi'
import type { getPeopleRoute } from '../routes'

export const getPeopleRouteHandler: RouteHandler<typeof getPeopleRoute> = async (c) => {
  throw new Error('Not implemented')
}
