import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteStacksRoute,
  getStacksRoute,
  postStacksRoute,
  deleteStacksIdRoute,
  getStacksIdRoute,
  putStacksIdRoute,
  deleteStacksIdAssetsAssetIdRoute,
} from '../routes'

export const deleteStacksRouteHandler: RouteHandler<typeof deleteStacksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStacksRouteHandler: RouteHandler<typeof getStacksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postStacksRouteHandler: RouteHandler<typeof postStacksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStacksIdRouteHandler: RouteHandler<typeof deleteStacksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStacksIdRouteHandler: RouteHandler<typeof getStacksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putStacksIdRouteHandler: RouteHandler<typeof putStacksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStacksIdAssetsAssetIdRouteHandler: RouteHandler<
  typeof deleteStacksIdAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
