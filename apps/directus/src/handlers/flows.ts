import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFlowsIdRoute,
  deleteFlowsRoute,
  getFlowsIdRoute,
  getFlowsRoute,
  patchFlowsIdRoute,
  patchFlowsRoute,
  postFlowsRoute,
} from '../routes'

export const getFlowsRouteHandler: RouteHandler<typeof getFlowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFlowsRouteHandler: RouteHandler<typeof postFlowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFlowsRouteHandler: RouteHandler<typeof patchFlowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFlowsRouteHandler: RouteHandler<typeof deleteFlowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFlowsIdRouteHandler: RouteHandler<typeof getFlowsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFlowsIdRouteHandler: RouteHandler<typeof patchFlowsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFlowsIdRouteHandler: RouteHandler<typeof deleteFlowsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
