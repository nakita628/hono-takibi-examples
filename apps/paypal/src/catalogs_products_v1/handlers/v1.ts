import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1CatalogsProductsProductIdRoute,
  getV1CatalogsProductsRoute,
  patchV1CatalogsProductsProductIdRoute,
  postV1CatalogsProductsRoute,
} from '../routes'

export const postV1CatalogsProductsRouteHandler: RouteHandler<
  typeof postV1CatalogsProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CatalogsProductsRouteHandler: RouteHandler<
  typeof getV1CatalogsProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CatalogsProductsProductIdRouteHandler: RouteHandler<
  typeof getV1CatalogsProductsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1CatalogsProductsProductIdRouteHandler: RouteHandler<
  typeof patchV1CatalogsProductsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
