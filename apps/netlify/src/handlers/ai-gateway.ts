import type { RouteHandler } from '@hono/zod-openapi'
import type { getAiGatewayProvidersRoute } from '../routes'

export const getAiGatewayProvidersRouteHandler: RouteHandler<
  typeof getAiGatewayProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
