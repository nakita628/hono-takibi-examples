import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdRoute,
  getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdRoute,
  getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsRoute,
  postPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsRoute,
  putPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicDestinationDefinitionsHandler = app
  .openapi(getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
