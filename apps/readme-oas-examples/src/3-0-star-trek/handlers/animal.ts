import type { RouteHandler } from '@hono/zod-openapi'
import type { getAnimalRoute, getAnimalSearchRoute, postAnimalSearchRoute } from '../routes'

export const getAnimalRouteHandler: RouteHandler<typeof getAnimalRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnimalSearchRouteHandler: RouteHandler<typeof getAnimalSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnimalSearchRouteHandler: RouteHandler<typeof postAnimalSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
