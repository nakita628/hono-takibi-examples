import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1HashesSearchRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ThreatListsComputeDiffRoute,
  getV1UrisSearchRoute,
  postV1NameCancelRoute,
  postV1ParentSubmissionsRoute,
} from '../routes'

export const getV1HashesSearchRouteHandler: RouteHandler<typeof getV1HashesSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ThreatListsComputeDiffRouteHandler: RouteHandler<
  typeof getV1ThreatListsComputeDiffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UrisSearchRouteHandler: RouteHandler<typeof getV1UrisSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameOperationsRouteHandler: RouteHandler<
  typeof getV1NameOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameCancelRouteHandler: RouteHandler<typeof postV1NameCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ParentSubmissionsRouteHandler: RouteHandler<
  typeof postV1ParentSubmissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
