import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPlatformsIdRoute,
  getPlatformsListsParentsRoute,
  getPlatformsRoute,
} from '../routes'

export const getPlatformsRouteHandler: RouteHandler<typeof getPlatformsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlatformsListsParentsRouteHandler: RouteHandler<
  typeof getPlatformsListsParentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlatformsIdRouteHandler: RouteHandler<typeof getPlatformsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
