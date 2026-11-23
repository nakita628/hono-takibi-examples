import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFormrulesIdIndexRoute,
  getFormrulesIdIndexRoute,
  getFormrulesIndexRoute,
  patchFormrulesIdIndexRoute,
  postFormrulesIndexRoute,
  putFormrulesIdIndexRoute,
} from '../routes'

export const getFormrulesIndexRouteHandler: RouteHandler<typeof getFormrulesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postFormrulesIndexRouteHandler: RouteHandler<typeof postFormrulesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteFormrulesIdIndexRouteHandler: RouteHandler<
  typeof deleteFormrulesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormrulesIdIndexRouteHandler: RouteHandler<
  typeof getFormrulesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFormrulesIdIndexRouteHandler: RouteHandler<
  typeof patchFormrulesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putFormrulesIdIndexRouteHandler: RouteHandler<
  typeof putFormrulesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
