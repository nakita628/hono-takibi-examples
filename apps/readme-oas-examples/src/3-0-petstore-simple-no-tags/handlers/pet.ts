import type { RouteHandler } from '@hono/zod-openapi'
import type { getPetIdRoute, putPetIdRoute } from '../routes'

export const putPetIdRouteHandler: RouteHandler<typeof putPetIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPetIdRouteHandler: RouteHandler<typeof getPetIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
