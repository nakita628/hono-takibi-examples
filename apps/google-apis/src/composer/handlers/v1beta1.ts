import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1beta1NameRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentEnvironmentsRoute,
  getV1beta1ParentImageVersionsRoute,
  patchV1beta1NameRoute,
  postV1beta1EnvironmentCheckUpgradeRoute,
  postV1beta1EnvironmentLoadSnapshotRoute,
  postV1beta1EnvironmentSaveSnapshotRoute,
  postV1beta1NameRestartWebServerRoute,
  postV1beta1ParentEnvironmentsRoute,
} from '../routes'

export const postV1beta1EnvironmentCheckUpgradeRouteHandler: RouteHandler<
  typeof postV1beta1EnvironmentCheckUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1EnvironmentLoadSnapshotRouteHandler: RouteHandler<
  typeof postV1beta1EnvironmentLoadSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1EnvironmentSaveSnapshotRouteHandler: RouteHandler<
  typeof postV1beta1EnvironmentSaveSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1beta1NameRouteHandler: RouteHandler<typeof deleteV1beta1NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1beta1NameRouteHandler: RouteHandler<typeof getV1beta1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1beta1NameRouteHandler: RouteHandler<typeof patchV1beta1NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1beta1NameOperationsRouteHandler: RouteHandler<
  typeof getV1beta1NameOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1NameRestartWebServerRouteHandler: RouteHandler<
  typeof postV1beta1NameRestartWebServerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1ParentEnvironmentsRouteHandler: RouteHandler<
  typeof getV1beta1ParentEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1ParentEnvironmentsRouteHandler: RouteHandler<
  typeof postV1beta1ParentEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1ParentImageVersionsRouteHandler: RouteHandler<
  typeof getV1beta1ParentImageVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
