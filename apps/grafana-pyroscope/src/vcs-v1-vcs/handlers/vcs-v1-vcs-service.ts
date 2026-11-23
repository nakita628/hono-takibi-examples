import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postVcsV1VCSServiceGetCommitRoute,
  postVcsV1VCSServiceGetCommitsRoute,
  postVcsV1VCSServiceGetFileRoute,
  postVcsV1VCSServiceGithubAppRoute,
  postVcsV1VCSServiceGithubLoginRoute,
  postVcsV1VCSServiceGithubRefreshRoute,
} from '../routes'

export const postVcsV1VCSServiceGetCommitRouteHandler: RouteHandler<
  typeof postVcsV1VCSServiceGetCommitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVcsV1VCSServiceGetCommitsRouteHandler: RouteHandler<
  typeof postVcsV1VCSServiceGetCommitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVcsV1VCSServiceGetFileRouteHandler: RouteHandler<
  typeof postVcsV1VCSServiceGetFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVcsV1VCSServiceGithubAppRouteHandler: RouteHandler<
  typeof postVcsV1VCSServiceGithubAppRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVcsV1VCSServiceGithubLoginRouteHandler: RouteHandler<
  typeof postVcsV1VCSServiceGithubLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVcsV1VCSServiceGithubRefreshRouteHandler: RouteHandler<
  typeof postVcsV1VCSServiceGithubRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}
