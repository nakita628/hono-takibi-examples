import type { RouteHandler } from '@hono/zod-openapi'
import type { postGraphqlRoute } from '../routes'

export const postGraphqlRouteHandler: RouteHandler<typeof postGraphqlRoute> = async (c) => {
  throw new Error('Not implemented')
}
