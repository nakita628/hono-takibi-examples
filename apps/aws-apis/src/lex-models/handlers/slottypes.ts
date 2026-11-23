import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSlottypesNameRoute,
  deleteSlottypesNameVersionVersionRoute,
  getSlottypesIndexRoute,
  getSlottypesNameVersionsIndexRoute,
  getSlottypesNameVersionsVersionRoute,
  postSlottypesNameVersionsRoute,
  putSlottypesNameVersionsLATESTRoute,
} from '../routes'

export const postSlottypesNameVersionsRouteHandler: RouteHandler<
  typeof postSlottypesNameVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSlottypesNameRouteHandler: RouteHandler<
  typeof deleteSlottypesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSlottypesNameVersionVersionRouteHandler: RouteHandler<
  typeof deleteSlottypesNameVersionVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSlottypesNameVersionsVersionRouteHandler: RouteHandler<
  typeof getSlottypesNameVersionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSlottypesNameVersionsIndexRouteHandler: RouteHandler<
  typeof getSlottypesNameVersionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSlottypesIndexRouteHandler: RouteHandler<typeof getSlottypesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putSlottypesNameVersionsLATESTRouteHandler: RouteHandler<
  typeof putSlottypesNameVersionsLATESTRoute
> = async (c) => {
  throw new Error('Not implemented')
}
