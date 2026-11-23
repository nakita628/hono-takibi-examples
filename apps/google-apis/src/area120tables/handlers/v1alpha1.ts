import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1alpha1NameRoute,
  getV1alpha1NameRoute,
  getV1alpha1ParentRowsRoute,
  getV1alpha1TablesRoute,
  getV1alpha1WorkspacesRoute,
  patchV1alpha1NameRoute,
  postV1alpha1ParentRowsBatchCreateRoute,
  postV1alpha1ParentRowsBatchDeleteRoute,
  postV1alpha1ParentRowsBatchUpdateRoute,
  postV1alpha1ParentRowsRoute,
} from '../routes'

export const getV1alpha1TablesRouteHandler: RouteHandler<typeof getV1alpha1TablesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1alpha1WorkspacesRouteHandler: RouteHandler<
  typeof getV1alpha1WorkspacesRoute
> = async (c) => {
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

export const patchV1alpha1NameRouteHandler: RouteHandler<typeof patchV1alpha1NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1alpha1ParentRowsRouteHandler: RouteHandler<
  typeof getV1alpha1ParentRowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1alpha1ParentRowsRouteHandler: RouteHandler<
  typeof postV1alpha1ParentRowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1alpha1ParentRowsBatchCreateRouteHandler: RouteHandler<
  typeof postV1alpha1ParentRowsBatchCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1alpha1ParentRowsBatchDeleteRouteHandler: RouteHandler<
  typeof postV1alpha1ParentRowsBatchDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1alpha1ParentRowsBatchUpdateRouteHandler: RouteHandler<
  typeof postV1alpha1ParentRowsBatchUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
