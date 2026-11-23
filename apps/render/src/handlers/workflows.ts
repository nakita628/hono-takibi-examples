import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWorkflowsWorkflowIdRoute,
  getWorkflowsRoute,
  getWorkflowsWorkflowIdRoute,
  patchWorkflowsWorkflowIdRoute,
  postWorkflowsRoute,
} from '../routes'

export const getWorkflowsRouteHandler: RouteHandler<typeof getWorkflowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkflowsRouteHandler: RouteHandler<typeof postWorkflowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkflowsWorkflowIdRouteHandler: RouteHandler<
  typeof getWorkflowsWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchWorkflowsWorkflowIdRouteHandler: RouteHandler<
  typeof patchWorkflowsWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWorkflowsWorkflowIdRouteHandler: RouteHandler<
  typeof deleteWorkflowsWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
