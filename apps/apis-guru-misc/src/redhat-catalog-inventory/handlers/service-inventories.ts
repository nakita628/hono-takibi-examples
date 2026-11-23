import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getServiceInventoriesIdRoute,
  getServiceInventoriesIdTagsRoute,
  getServiceInventoriesRoute,
  postServiceInventoriesIdTagRoute,
  postServiceInventoriesIdUntagRoute,
} from '../routes'

export const getServiceInventoriesRouteHandler: RouteHandler<
  typeof getServiceInventoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceInventoriesIdRouteHandler: RouteHandler<
  typeof getServiceInventoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServiceInventoriesIdTagRouteHandler: RouteHandler<
  typeof postServiceInventoriesIdTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceInventoriesIdTagsRouteHandler: RouteHandler<
  typeof getServiceInventoriesIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServiceInventoriesIdUntagRouteHandler: RouteHandler<
  typeof postServiceInventoriesIdUntagRoute
> = async (c) => {
  throw new Error('Not implemented')
}
