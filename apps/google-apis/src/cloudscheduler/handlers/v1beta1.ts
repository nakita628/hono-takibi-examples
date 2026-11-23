import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1beta1NameRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentJobsRoute,
  patchV1beta1NameRoute,
  postV1beta1NamePauseRoute,
  postV1beta1NameResumeRoute,
  postV1beta1NameRunRoute,
  postV1beta1ParentJobsRoute,
} from '../routes'

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

export const getV1beta1NameLocationsRouteHandler: RouteHandler<
  typeof getV1beta1NameLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1NamePauseRouteHandler: RouteHandler<
  typeof postV1beta1NamePauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1NameResumeRouteHandler: RouteHandler<
  typeof postV1beta1NameResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1NameRunRouteHandler: RouteHandler<typeof postV1beta1NameRunRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1beta1ParentJobsRouteHandler: RouteHandler<
  typeof getV1beta1ParentJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1ParentJobsRouteHandler: RouteHandler<
  typeof postV1beta1ParentJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
