import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIssueTrackersIssueTrackerNameRoute,
  getIssueTrackersIssueTrackerNameIssuesIssueNameRoute,
  getIssueTrackersIssueTrackerNameRoute,
  getIssueTrackersRoute,
  postIssueTrackersRoute,
  putIssueTrackersIssueTrackerNameRoute,
} from '../routes'

export const getIssueTrackersRouteHandler: RouteHandler<typeof getIssueTrackersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIssueTrackersRouteHandler: RouteHandler<typeof postIssueTrackersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteIssueTrackersIssueTrackerNameRouteHandler: RouteHandler<
  typeof deleteIssueTrackersIssueTrackerNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIssueTrackersIssueTrackerNameRouteHandler: RouteHandler<
  typeof getIssueTrackersIssueTrackerNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIssueTrackersIssueTrackerNameRouteHandler: RouteHandler<
  typeof putIssueTrackersIssueTrackerNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIssueTrackersIssueTrackerNameIssuesIssueNameRouteHandler: RouteHandler<
  typeof getIssueTrackersIssueTrackerNameIssuesIssueNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
