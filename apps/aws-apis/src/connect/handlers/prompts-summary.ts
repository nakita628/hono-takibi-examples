import type { RouteHandler } from '@hono/zod-openapi'
import type { getPromptsSummaryInstanceIdRoute } from '../routes'

export const getPromptsSummaryInstanceIdRouteHandler: RouteHandler<
  typeof getPromptsSummaryInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
