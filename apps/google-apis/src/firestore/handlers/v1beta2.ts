import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1beta2NameRoute,
  getV1beta2NameRoute,
  getV1beta2ParentFieldsRoute,
  getV1beta2ParentIndexesRoute,
  patchV1beta2NameRoute,
  postV1beta2NameExportDocumentsRoute,
  postV1beta2NameImportDocumentsRoute,
  postV1beta2ParentIndexesRoute,
} from '../routes'

export const deleteV1beta2NameRouteHandler: RouteHandler<typeof deleteV1beta2NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1beta2NameRouteHandler: RouteHandler<typeof getV1beta2NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1beta2NameRouteHandler: RouteHandler<typeof patchV1beta2NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1beta2NameExportDocumentsRouteHandler: RouteHandler<
  typeof postV1beta2NameExportDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta2NameImportDocumentsRouteHandler: RouteHandler<
  typeof postV1beta2NameImportDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta2ParentFieldsRouteHandler: RouteHandler<
  typeof getV1beta2ParentFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta2ParentIndexesRouteHandler: RouteHandler<
  typeof getV1beta2ParentIndexesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta2ParentIndexesRouteHandler: RouteHandler<
  typeof postV1beta2ParentIndexesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
