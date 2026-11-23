import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIssueIssueIdRoute,
  getIssueCountRoute,
  getIssueIssueIdRoute,
  getIssueRoute,
  postIssueIssueIdCommentRoute,
  postIssueIssueIdStatusRoute,
  postIssueRoute,
} from '../routes'

export const getIssueRouteHandler: RouteHandler<typeof getIssueRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIssueRouteHandler: RouteHandler<typeof postIssueRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIssueCountRouteHandler: RouteHandler<typeof getIssueCountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIssueIssueIdRouteHandler: RouteHandler<typeof getIssueIssueIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIssueIssueIdRouteHandler: RouteHandler<typeof deleteIssueIssueIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIssueIssueIdCommentRouteHandler: RouteHandler<
  typeof postIssueIssueIdCommentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIssueIssueIdStatusRouteHandler: RouteHandler<
  typeof postIssueIssueIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
