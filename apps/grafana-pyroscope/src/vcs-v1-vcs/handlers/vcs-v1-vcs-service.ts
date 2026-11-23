import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postVcsV1VCSServiceGetCommitRoute,
  postVcsV1VCSServiceGetCommitsRoute,
  postVcsV1VCSServiceGetFileRoute,
  postVcsV1VCSServiceGithubAppRoute,
  postVcsV1VCSServiceGithubLoginRoute,
  postVcsV1VCSServiceGithubRefreshRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vcsV1VcsServiceHandler = app
  .openapi(postVcsV1VCSServiceGetCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVcsV1VCSServiceGetCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVcsV1VCSServiceGetFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVcsV1VCSServiceGithubAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVcsV1VCSServiceGithubLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVcsV1VCSServiceGithubRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
