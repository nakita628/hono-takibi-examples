import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1WorkspacesWorkspaceIdOauthCredentialsActorTypeNameRoute,
  deletePublicV1WorkspacesWorkspaceIdRoute,
  getPublicV1WorkspacesRoute,
  getPublicV1WorkspacesWorkspaceIdRoute,
  patchPublicV1WorkspacesWorkspaceIdRoute,
  postPublicV1WorkspacesRoute,
  putPublicV1WorkspacesWorkspaceIdOauthCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicWorkspacesHandler = app
  .openapi(getPublicV1WorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1WorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1WorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1WorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1WorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPublicV1WorkspacesWorkspaceIdOauthCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1WorkspacesWorkspaceIdOauthCredentialsActorTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
