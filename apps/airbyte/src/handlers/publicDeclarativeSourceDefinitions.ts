import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdRoute,
  getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdRoute,
  getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesRoute,
  postPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesRoute,
  putPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicDeclarativeSourceDefinitionsHandler = app
  .openapi(getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deletePublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
