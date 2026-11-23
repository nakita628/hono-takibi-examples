import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWorkflowversionsRoute,
  getWorkflowversionsWorkflowVersionIdRoute,
  postWorkflowversionsRoute,
} from '../routes'

export const getWorkflowversionsRouteHandler: RouteHandler<
  typeof getWorkflowversionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkflowversionsRouteHandler: RouteHandler<
  typeof postWorkflowversionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkflowversionsWorkflowVersionIdRouteHandler: RouteHandler<
  typeof getWorkflowversionsWorkflowVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
