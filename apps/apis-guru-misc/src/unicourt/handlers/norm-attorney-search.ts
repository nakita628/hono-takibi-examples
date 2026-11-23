import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNormAttorneySearchNormAttorneySearchIdRoute,
  getNormAttorneySearchRoute,
} from '../routes'

export const getNormAttorneySearchRouteHandler: RouteHandler<
  typeof getNormAttorneySearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNormAttorneySearchNormAttorneySearchIdRouteHandler: RouteHandler<
  typeof getNormAttorneySearchNormAttorneySearchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
