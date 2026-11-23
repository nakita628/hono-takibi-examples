import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1betaNameRoute,
  getV1betaNameLocationsRoute,
  getV1betaNameOperationsRoute,
  getV1betaNameRoute,
  getV1betaParentWorkflowsRoute,
  patchV1betaNameRoute,
  postV1betaParentWorkflowsRoute,
} from '../routes'

export const deleteV1betaNameRouteHandler: RouteHandler<typeof deleteV1betaNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1betaNameRouteHandler: RouteHandler<typeof getV1betaNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1betaNameRouteHandler: RouteHandler<typeof patchV1betaNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaNameLocationsRouteHandler: RouteHandler<
  typeof getV1betaNameLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaNameOperationsRouteHandler: RouteHandler<
  typeof getV1betaNameOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaParentWorkflowsRouteHandler: RouteHandler<
  typeof getV1betaParentWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaParentWorkflowsRouteHandler: RouteHandler<
  typeof postV1betaParentWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
