import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1beta1NameRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentVulnerabilitiesRoute,
  postV1beta1NameCancelRoute,
  postV1beta1NameWaitRoute,
  postV1beta1ParentScansAnalyzePackagesRoute,
} from '../routes'

export const deleteV1beta1NameRouteHandler: RouteHandler<typeof deleteV1beta1NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1beta1NameRouteHandler: RouteHandler<typeof getV1beta1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1NameOperationsRouteHandler: RouteHandler<
  typeof getV1beta1NameOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1NameCancelRouteHandler: RouteHandler<
  typeof postV1beta1NameCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1NameWaitRouteHandler: RouteHandler<
  typeof postV1beta1NameWaitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1ParentScansAnalyzePackagesRouteHandler: RouteHandler<
  typeof postV1beta1ParentScansAnalyzePackagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1ParentVulnerabilitiesRouteHandler: RouteHandler<
  typeof getV1beta1ParentVulnerabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
