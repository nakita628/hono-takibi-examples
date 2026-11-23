import type { RouteHandler } from '@hono/zod-openapi'
import type { getWorkflowsUpdateStepRoute } from '../routes'

export const getWorkflowsUpdateStepRouteHandler: RouteHandler<
  typeof getWorkflowsUpdateStepRoute
> = async (c) => {
  throw new Error('Not implemented')
}
