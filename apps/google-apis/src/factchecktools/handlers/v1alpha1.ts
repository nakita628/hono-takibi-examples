import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1alpha1NameRoute,
  getV1alpha1ClaimsSearchRoute,
  getV1alpha1NameRoute,
  getV1alpha1PagesRoute,
  postV1alpha1PagesRoute,
  putV1alpha1NameRoute,
} from '../routes'

export const getV1alpha1ClaimsSearchRouteHandler: RouteHandler<
  typeof getV1alpha1ClaimsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1alpha1PagesRouteHandler: RouteHandler<typeof getV1alpha1PagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1alpha1PagesRouteHandler: RouteHandler<typeof postV1alpha1PagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1alpha1NameRouteHandler: RouteHandler<typeof deleteV1alpha1NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1alpha1NameRouteHandler: RouteHandler<typeof getV1alpha1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1alpha1NameRouteHandler: RouteHandler<typeof putV1alpha1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}
