import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentJobsRoute,
  getV1ParentJobTemplatesRoute,
  postV1ParentJobsRoute,
  postV1ParentJobTemplatesRoute,
} from '../routes'

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentJobTemplatesRouteHandler: RouteHandler<
  typeof getV1ParentJobTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentJobTemplatesRouteHandler: RouteHandler<
  typeof postV1ParentJobTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentJobsRouteHandler: RouteHandler<typeof getV1ParentJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentJobsRouteHandler: RouteHandler<typeof postV1ParentJobsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
