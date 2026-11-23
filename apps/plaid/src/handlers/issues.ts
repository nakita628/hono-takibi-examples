import type { RouteHandler } from '@hono/zod-openapi'
import type { postIssuesGetRoute, postIssuesSearchRoute, postIssuesSubscribeRoute } from '../routes'

export const postIssuesSearchRouteHandler: RouteHandler<typeof postIssuesSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIssuesGetRouteHandler: RouteHandler<typeof postIssuesGetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIssuesSubscribeRouteHandler: RouteHandler<
  typeof postIssuesSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
