import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1betaNameRoute,
  getV1betaNameRoute,
  getV1betaParentInstancesRoute,
  postV1betaNameDisableRoute,
  postV1betaNameReenableRoute,
  postV1betaNameUndeleteRoute,
  postV1betaParentInstancesRoute,
} from '../routes'

export const deleteV1betaNameRouteHandler: RouteHandler<typeof deleteV1betaNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1betaNameRouteHandler: RouteHandler<typeof getV1betaNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaNameDisableRouteHandler: RouteHandler<
  typeof postV1betaNameDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaNameReenableRouteHandler: RouteHandler<
  typeof postV1betaNameReenableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaNameUndeleteRouteHandler: RouteHandler<
  typeof postV1betaNameUndeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaParentInstancesRouteHandler: RouteHandler<
  typeof getV1betaParentInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaParentInstancesRouteHandler: RouteHandler<
  typeof postV1betaParentInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
