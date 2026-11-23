import type { RouteHandler } from '@hono/zod-openapi'
import type { getSetsRoute, getSetsSetCardLocalIdRoute, getSetsSetRoute } from '../routes'

export const getSetsRouteHandler: RouteHandler<typeof getSetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetsSetRouteHandler: RouteHandler<typeof getSetsSetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSetsSetCardLocalIdRouteHandler: RouteHandler<
  typeof getSetsSetCardLocalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
