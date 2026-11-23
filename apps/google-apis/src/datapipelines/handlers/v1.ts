import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentJobsRoute,
  getV1ParentPipelinesRoute,
  patchV1NameRoute,
  postV1NameRunRoute,
  postV1NameStopRoute,
  postV1ParentPipelinesRoute,
} from '../routes'

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameRunRouteHandler: RouteHandler<typeof postV1NameRunRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameStopRouteHandler: RouteHandler<typeof postV1NameStopRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentJobsRouteHandler: RouteHandler<typeof getV1ParentJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentPipelinesRouteHandler: RouteHandler<
  typeof getV1ParentPipelinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentPipelinesRouteHandler: RouteHandler<
  typeof postV1ParentPipelinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
