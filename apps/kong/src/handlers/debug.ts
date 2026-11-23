import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDebugNodeLogLevelRoute,
  putDebugClusterControlPlanesNodesLogLevelLogLevelRoute,
  putDebugClusterLogLevelLogLevelRoute,
  putDebugNodeLogLevelLogLevelRoute,
} from '../routes'

export const putDebugClusterControlPlanesNodesLogLevelLogLevelRouteHandler: RouteHandler<
  typeof putDebugClusterControlPlanesNodesLogLevelLogLevelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDebugClusterLogLevelLogLevelRouteHandler: RouteHandler<
  typeof putDebugClusterLogLevelLogLevelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDebugNodeLogLevelRouteHandler: RouteHandler<
  typeof getDebugNodeLogLevelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDebugNodeLogLevelLogLevelRouteHandler: RouteHandler<
  typeof putDebugNodeLogLevelLogLevelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
