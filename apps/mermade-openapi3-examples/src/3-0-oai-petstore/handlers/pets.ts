import type { RouteHandler } from '@hono/zod-openapi'
import type { getPetsPetIdRoute, getPetsRoute, postPetsRoute } from '../routes'

export const getPetsRouteHandler: RouteHandler<typeof getPetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPetsRouteHandler: RouteHandler<typeof postPetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPetsPetIdRouteHandler: RouteHandler<typeof getPetsPetIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
