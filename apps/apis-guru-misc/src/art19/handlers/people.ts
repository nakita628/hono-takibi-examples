import type { RouteHandler } from '@hono/zod-openapi'
import type { getPeopleIdRoute, getPeopleRoute } from '../routes'

export const getPeopleRouteHandler: RouteHandler<typeof getPeopleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPeopleIdRouteHandler: RouteHandler<typeof getPeopleIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
