import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMetafieldsIdIndexRoute,
  getMetafieldsIdIndexRoute,
  getMetafieldsIndexRoute,
  patchMetafieldsIdIndexRoute,
  postMetafieldsIndexRoute,
  putMetafieldsIdIndexRoute,
} from '../routes'

export const getMetafieldsIndexRouteHandler: RouteHandler<typeof getMetafieldsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMetafieldsIndexRouteHandler: RouteHandler<
  typeof postMetafieldsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMetafieldsIdIndexRouteHandler: RouteHandler<
  typeof deleteMetafieldsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetafieldsIdIndexRouteHandler: RouteHandler<
  typeof getMetafieldsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMetafieldsIdIndexRouteHandler: RouteHandler<
  typeof patchMetafieldsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMetafieldsIdIndexRouteHandler: RouteHandler<
  typeof putMetafieldsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
