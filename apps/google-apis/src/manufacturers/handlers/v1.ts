import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  deleteV1ParentProductsNameRoute,
  getV1NameRoute,
  getV1ParentProductCertificationsRoute,
  getV1ParentProductsNameRoute,
  getV1ParentProductsRoute,
  patchV1NameRoute,
  putV1ParentProductsNameRoute,
} from '../routes'

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentProductCertificationsRouteHandler: RouteHandler<
  typeof getV1ParentProductCertificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentProductsRouteHandler: RouteHandler<
  typeof getV1ParentProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ParentProductsNameRouteHandler: RouteHandler<
  typeof deleteV1ParentProductsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentProductsNameRouteHandler: RouteHandler<
  typeof getV1ParentProductsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ParentProductsNameRouteHandler: RouteHandler<
  typeof putV1ParentProductsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
