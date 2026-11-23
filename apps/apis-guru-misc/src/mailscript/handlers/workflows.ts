import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWorkflowsWorkflowRoute,
  getWorkflowsRoute,
  postWorkflowsRoute,
  postWorkflowsSetRoute,
  putWorkflowsWorkflowRoute,
} from '../routes'

export const getWorkflowsRouteHandler: RouteHandler<typeof getWorkflowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkflowsRouteHandler: RouteHandler<typeof postWorkflowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkflowsSetRouteHandler: RouteHandler<typeof postWorkflowsSetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteWorkflowsWorkflowRouteHandler: RouteHandler<
  typeof deleteWorkflowsWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWorkflowsWorkflowRouteHandler: RouteHandler<
  typeof putWorkflowsWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}
