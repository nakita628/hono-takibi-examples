import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWWorkspaceWorkspaceDependenciesGetLatestLanguageRoute,
  getWWorkspaceWorkspaceDependenciesListRoute,
  postWWorkspaceWorkspaceDependenciesArchiveLanguageRoute,
  postWWorkspaceWorkspaceDependenciesCreateRoute,
  postWWorkspaceWorkspaceDependenciesDeleteLanguageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspaceDependenciesHandler = app
  .openapi(postWWorkspaceWorkspaceDependenciesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspaceDependenciesArchiveLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspaceDependenciesDeleteLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspaceDependenciesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspaceDependenciesGetLatestLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
