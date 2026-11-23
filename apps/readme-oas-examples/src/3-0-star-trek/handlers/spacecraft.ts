import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSpacecraftRoute,
  getSpacecraftSearchRoute,
  postSpacecraftSearchRoute,
} from '../routes'

export const getSpacecraftRouteHandler: RouteHandler<typeof getSpacecraftRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpacecraftSearchRouteHandler: RouteHandler<
  typeof getSpacecraftSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpacecraftSearchRouteHandler: RouteHandler<
  typeof postSpacecraftSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
