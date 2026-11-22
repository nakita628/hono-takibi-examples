import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdRoute,
  getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdRoute,
  getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesRoute,
  postPublicV1WorkspacesWorkspaceIdDefinitionsSourcesRoute,
  putPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicSourceDefinitionsHandler = app
  .openapi(getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1WorkspacesWorkspaceIdDefinitionsSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
