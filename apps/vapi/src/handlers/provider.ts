import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteProviderProviderResourceNameIdRoute,
  getProviderProviderResourceNameIdRoute,
  getProviderProviderResourceNameRoute,
  patchProviderProviderResourceNameIdRoute,
  postProviderProviderResourceNameRoute,
} from '../routes'

export const postProviderProviderResourceNameRouteHandler: RouteHandler<
  typeof postProviderProviderResourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProviderProviderResourceNameRouteHandler: RouteHandler<
  typeof getProviderProviderResourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProviderProviderResourceNameIdRouteHandler: RouteHandler<
  typeof getProviderProviderResourceNameIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProviderProviderResourceNameIdRouteHandler: RouteHandler<
  typeof deleteProviderProviderResourceNameIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProviderProviderResourceNameIdRouteHandler: RouteHandler<
  typeof patchProviderProviderResourceNameIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
