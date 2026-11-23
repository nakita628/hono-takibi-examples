import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1alpha2NameRoute,
  getV1alpha2NameRoute,
  getV1alpha2ParentWorkerPoolsRoute,
  patchV1alpha2NameRoute,
  postV1alpha2NameCancelRoute,
  postV1alpha2ParentWorkerPoolsRoute,
} from '../routes'

export const deleteV1alpha2NameRouteHandler: RouteHandler<typeof deleteV1alpha2NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1alpha2NameRouteHandler: RouteHandler<typeof getV1alpha2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1alpha2NameRouteHandler: RouteHandler<typeof patchV1alpha2NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1alpha2NameCancelRouteHandler: RouteHandler<
  typeof postV1alpha2NameCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1alpha2ParentWorkerPoolsRouteHandler: RouteHandler<
  typeof getV1alpha2ParentWorkerPoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1alpha2ParentWorkerPoolsRouteHandler: RouteHandler<
  typeof postV1alpha2ParentWorkerPoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
