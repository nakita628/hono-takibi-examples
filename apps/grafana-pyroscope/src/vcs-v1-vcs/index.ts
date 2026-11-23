import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postVcsV1VCSServiceGetCommitRoute,
  postVcsV1VCSServiceGetCommitsRoute,
  postVcsV1VCSServiceGetFileRoute,
  postVcsV1VCSServiceGithubAppRoute,
  postVcsV1VCSServiceGithubLoginRoute,
  postVcsV1VCSServiceGithubRefreshRoute,
} from './routes'
import {
  postVcsV1VCSServiceGetCommitRouteHandler,
  postVcsV1VCSServiceGetCommitsRouteHandler,
  postVcsV1VCSServiceGetFileRouteHandler,
  postVcsV1VCSServiceGithubAppRouteHandler,
  postVcsV1VCSServiceGithubLoginRouteHandler,
  postVcsV1VCSServiceGithubRefreshRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postVcsV1VCSServiceGetCommitRoute, postVcsV1VCSServiceGetCommitRouteHandler)
  .openapi(postVcsV1VCSServiceGetCommitsRoute, postVcsV1VCSServiceGetCommitsRouteHandler)
  .openapi(postVcsV1VCSServiceGetFileRoute, postVcsV1VCSServiceGetFileRouteHandler)
  .openapi(postVcsV1VCSServiceGithubAppRoute, postVcsV1VCSServiceGithubAppRouteHandler)
  .openapi(postVcsV1VCSServiceGithubLoginRoute, postVcsV1VCSServiceGithubLoginRouteHandler)
  .openapi(postVcsV1VCSServiceGithubRefreshRoute, postVcsV1VCSServiceGithubRefreshRouteHandler)

export default app
