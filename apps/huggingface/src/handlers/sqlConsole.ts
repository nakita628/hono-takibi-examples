import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiRepoTypeNamespaceRepoSqlConsoleEmbedIdRoute,
  patchApiRepoTypeNamespaceRepoSqlConsoleEmbedIdRoute,
  postApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHideRoute,
  postApiRepoTypeNamespaceRepoSqlConsoleEmbedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sqlConsoleHandler = app
  .openapi(patchApiRepoTypeNamespaceRepoSqlConsoleEmbedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiRepoTypeNamespaceRepoSqlConsoleEmbedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRepoTypeNamespaceRepoSqlConsoleEmbedRoute, (c) => {
    throw new Error('Not implemented')
  })
