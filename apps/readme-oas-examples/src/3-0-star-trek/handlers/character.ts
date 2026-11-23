import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCharacterRoute,
  getCharacterSearchRoute,
  postCharacterSearchRoute,
} from '../routes'

export const getCharacterRouteHandler: RouteHandler<typeof getCharacterRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCharacterSearchRouteHandler: RouteHandler<typeof getCharacterSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCharacterSearchRouteHandler: RouteHandler<
  typeof postCharacterSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
