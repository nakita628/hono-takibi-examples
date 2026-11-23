import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDirectivesDirectiveIdRoute,
  getDirectivesDirectiveIdRoute,
  getDirectivesRoute,
  postDirectivesDirectiveIdCheckRoute,
  postDirectivesDirectiveIdRoute,
  putDirectivesRoute,
} from '../routes'

export const getDirectivesRouteHandler: RouteHandler<typeof getDirectivesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putDirectivesRouteHandler: RouteHandler<typeof putDirectivesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDirectivesDirectiveIdRouteHandler: RouteHandler<
  typeof deleteDirectivesDirectiveIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectivesDirectiveIdRouteHandler: RouteHandler<
  typeof getDirectivesDirectiveIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectivesDirectiveIdRouteHandler: RouteHandler<
  typeof postDirectivesDirectiveIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectivesDirectiveIdCheckRouteHandler: RouteHandler<
  typeof postDirectivesDirectiveIdCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}
