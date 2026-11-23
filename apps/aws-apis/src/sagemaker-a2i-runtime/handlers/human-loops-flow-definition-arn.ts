import type { RouteHandler } from '@hono/zod-openapi'
import type { getHumanLoopsFlowDefinitionArnRoute } from '../routes'

export const getHumanLoopsFlowDefinitionArnRouteHandler: RouteHandler<
  typeof getHumanLoopsFlowDefinitionArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
