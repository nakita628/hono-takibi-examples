import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSpacecraftClassRoute,
  getSpacecraftClassSearchRoute,
  postSpacecraftClassSearchRoute,
} from '../routes'

export const getSpacecraftClassRouteHandler: RouteHandler<typeof getSpacecraftClassRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSpacecraftClassSearchRouteHandler: RouteHandler<
  typeof getSpacecraftClassSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacecraftClassSearchRouteHandler: RouteHandler<
  typeof postSpacecraftClassSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
