import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteIssuesRoute, getIssuesRoute } from '../routes'

export const getIssuesRouteHandler: RouteHandler<typeof getIssuesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIssuesRouteHandler: RouteHandler<typeof deleteIssuesRoute> = async (c) => {
  throw new Error('Not implemented')
}
