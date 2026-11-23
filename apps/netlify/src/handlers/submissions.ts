import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteSubmissionsSubmissionIdRoute, getSubmissionsSubmissionIdRoute } from '../routes'

export const getSubmissionsSubmissionIdRouteHandler: RouteHandler<
  typeof getSubmissionsSubmissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSubmissionsSubmissionIdRouteHandler: RouteHandler<
  typeof deleteSubmissionsSubmissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
