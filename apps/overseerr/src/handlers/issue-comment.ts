import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIssueCommentCommentIdRoute,
  getIssueCommentCommentIdRoute,
  putIssueCommentCommentIdRoute,
} from '../routes'

export const getIssueCommentCommentIdRouteHandler: RouteHandler<
  typeof getIssueCommentCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIssueCommentCommentIdRouteHandler: RouteHandler<
  typeof putIssueCommentCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIssueCommentCommentIdRouteHandler: RouteHandler<
  typeof deleteIssueCommentCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
