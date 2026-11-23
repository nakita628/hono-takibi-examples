import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1AttributesRoute,
  getV1CategoriesBatchGetRoute,
  getV1CategoriesRoute,
  getV1ChainsSearchRoute,
  getV1NameGetGoogleUpdatedRoute,
  getV1NameRoute,
  getV1ParentLocationsRoute,
  patchV1NameRoute,
  postV1GoogleLocationsSearchRoute,
  postV1NameAssociateRoute,
  postV1NameClearLocationAssociationRoute,
  postV1ParentLocationsRoute,
} from '../routes'

export const getV1AttributesRouteHandler: RouteHandler<typeof getV1AttributesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CategoriesRouteHandler: RouteHandler<typeof getV1CategoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CategoriesBatchGetRouteHandler: RouteHandler<
  typeof getV1CategoriesBatchGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ChainsSearchRouteHandler: RouteHandler<typeof getV1ChainsSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1GoogleLocationsSearchRouteHandler: RouteHandler<
  typeof postV1GoogleLocationsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameAssociateRouteHandler: RouteHandler<
  typeof postV1NameAssociateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameClearLocationAssociationRouteHandler: RouteHandler<
  typeof postV1NameClearLocationAssociationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameGetGoogleUpdatedRouteHandler: RouteHandler<
  typeof getV1NameGetGoogleUpdatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentLocationsRouteHandler: RouteHandler<
  typeof getV1ParentLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentLocationsRouteHandler: RouteHandler<
  typeof postV1ParentLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
