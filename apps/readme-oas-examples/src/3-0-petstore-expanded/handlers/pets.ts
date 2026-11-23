import type { RouteHandler } from '@hono/zod-openapi'
import type { deletePetsIdRoute, getPetsIdRoute, getPetsRoute, postPetsRoute } from '../routes'

export const getPetsRouteHandler: RouteHandler<typeof getPetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPetsRouteHandler: RouteHandler<typeof postPetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPetsIdRouteHandler: RouteHandler<typeof getPetsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePetsIdRouteHandler: RouteHandler<typeof deletePetsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
