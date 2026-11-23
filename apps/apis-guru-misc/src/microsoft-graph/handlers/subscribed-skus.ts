import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSubscribedSkusSubscribedSkuIdRoute,
  getSubscribedSkusRoute,
  getSubscribedSkusSubscribedSkuIdRoute,
  patchSubscribedSkusSubscribedSkuIdRoute,
  postSubscribedSkusRoute,
} from '../routes'

export const getSubscribedSkusRouteHandler: RouteHandler<typeof getSubscribedSkusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSubscribedSkusRouteHandler: RouteHandler<typeof postSubscribedSkusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSubscribedSkusSubscribedSkuIdRouteHandler: RouteHandler<
  typeof deleteSubscribedSkusSubscribedSkuIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscribedSkusSubscribedSkuIdRouteHandler: RouteHandler<
  typeof getSubscribedSkusSubscribedSkuIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSubscribedSkusSubscribedSkuIdRouteHandler: RouteHandler<
  typeof patchSubscribedSkusSubscribedSkuIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
