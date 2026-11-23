import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1beta1ResourceCatalogsSearchRoute,
  getV1beta1ResourceProductsSearchRoute,
  getV1beta1ResourceVersionsSearchRoute,
} from '../routes'

export const getV1beta1ResourceCatalogsSearchRouteHandler: RouteHandler<
  typeof getV1beta1ResourceCatalogsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1ResourceProductsSearchRouteHandler: RouteHandler<
  typeof getV1beta1ResourceProductsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1ResourceVersionsSearchRouteHandler: RouteHandler<
  typeof getV1beta1ResourceVersionsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
