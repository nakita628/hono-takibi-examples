import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIntentsNameRoute,
  deleteIntentsNameVersionsVersionRoute,
  getIntentsIndexRoute,
  getIntentsNameVersionsIndexRoute,
  getIntentsNameVersionsVersionRoute,
  postIntentsNameVersionsRoute,
  putIntentsNameVersionsLATESTRoute,
} from '../routes'

export const postIntentsNameVersionsRouteHandler: RouteHandler<
  typeof postIntentsNameVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIntentsNameRouteHandler: RouteHandler<typeof deleteIntentsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteIntentsNameVersionsVersionRouteHandler: RouteHandler<
  typeof deleteIntentsNameVersionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIntentsNameVersionsVersionRouteHandler: RouteHandler<
  typeof getIntentsNameVersionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIntentsNameVersionsIndexRouteHandler: RouteHandler<
  typeof getIntentsNameVersionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIntentsIndexRouteHandler: RouteHandler<typeof getIntentsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putIntentsNameVersionsLATESTRouteHandler: RouteHandler<
  typeof putIntentsNameVersionsLATESTRoute
> = async (c) => {
  throw new Error('Not implemented')
}
