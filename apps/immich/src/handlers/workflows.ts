import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWorkflowsRoute,
  postWorkflowsRoute,
  getWorkflowsTriggersRoute,
  deleteWorkflowsIdRoute,
  getWorkflowsIdRoute,
  putWorkflowsIdRoute,
  getWorkflowsIdLogsRoute,
  getWorkflowsIdShareRoute,
} from '../routes'

export const getWorkflowsRouteHandler: RouteHandler<typeof getWorkflowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkflowsRouteHandler: RouteHandler<typeof postWorkflowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkflowsTriggersRouteHandler: RouteHandler<
  typeof getWorkflowsTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWorkflowsIdRouteHandler: RouteHandler<typeof deleteWorkflowsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getWorkflowsIdRouteHandler: RouteHandler<typeof getWorkflowsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putWorkflowsIdRouteHandler: RouteHandler<typeof putWorkflowsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkflowsIdLogsRouteHandler: RouteHandler<typeof getWorkflowsIdLogsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getWorkflowsIdShareRouteHandler: RouteHandler<
  typeof getWorkflowsIdShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}
