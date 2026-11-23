import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAutomateWorkflowsRoute,
  postAutomateWorkflowsWorkflowIdStartRoute,
} from '../routes'

export const getAutomateWorkflowsRouteHandler: RouteHandler<
  typeof getAutomateWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAutomateWorkflowsWorkflowIdStartRouteHandler: RouteHandler<
  typeof postAutomateWorkflowsWorkflowIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}
