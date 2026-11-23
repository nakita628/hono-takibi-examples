import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGithubAppGhesAssignWorkspaceIdInstallationIdRoute,
  getGithubAppConnectedRepositoriesRoute,
  getGithubAppGhesConfigRoute,
  getGithubAppGhesDiscoverRoute,
  postGithubAppGhesAssignRoute,
} from '../routes'

const app = new OpenAPIHono()

export const githubAppHandler = app
  .openapi(getGithubAppConnectedRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubAppGhesConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubAppGhesDiscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGithubAppGhesAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGithubAppGhesAssignWorkspaceIdInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
