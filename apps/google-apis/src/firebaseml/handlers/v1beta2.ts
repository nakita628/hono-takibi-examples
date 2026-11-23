import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1beta2NameRoute,
  getV1beta2NameDownloadRoute,
  getV1beta2NameRoute,
  getV1beta2ParentModelsRoute,
  patchV1beta2NameRoute,
  postV1beta2ParentModelsRoute,
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

export const getV1beta2NameDownloadRouteHandler: RouteHandler<
  typeof getV1beta2NameDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta2ParentModelsRouteHandler: RouteHandler<
  typeof getV1beta2ParentModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta2ParentModelsRouteHandler: RouteHandler<
  typeof postV1beta2ParentModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
