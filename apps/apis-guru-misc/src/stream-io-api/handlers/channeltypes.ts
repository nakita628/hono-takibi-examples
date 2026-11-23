import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteChanneltypesNameRoute,
  getChanneltypesNameRoute,
  getChanneltypesRoute,
  postChanneltypesRoute,
  putChanneltypesNameRoute,
} from '../routes'

export const getChanneltypesRouteHandler: RouteHandler<typeof getChanneltypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChanneltypesRouteHandler: RouteHandler<typeof postChanneltypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteChanneltypesNameRouteHandler: RouteHandler<
  typeof deleteChanneltypesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChanneltypesNameRouteHandler: RouteHandler<
  typeof getChanneltypesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putChanneltypesNameRouteHandler: RouteHandler<
  typeof putChanneltypesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
