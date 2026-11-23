import type { RouteHandler } from '@hono/zod-openapi'
import type { get3dsecureIdRoute, get3dsecureRoute, post3dsecureRoute } from '../routes'

export const get3dsecureRouteHandler: RouteHandler<typeof get3dsecureRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const post3dsecureRouteHandler: RouteHandler<typeof post3dsecureRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get3dsecureIdRouteHandler: RouteHandler<typeof get3dsecureIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
