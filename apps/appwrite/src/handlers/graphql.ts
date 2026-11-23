import type { RouteHandler } from '@hono/zod-openapi'
import type { postGraphqlMutationRoute, postGraphqlRoute } from '../routes'

export const postGraphqlRouteHandler: RouteHandler<typeof postGraphqlRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGraphqlMutationRouteHandler: RouteHandler<
  typeof postGraphqlMutationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
