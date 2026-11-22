import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypePythonNotebookRoute } from '../routes'

const app = new OpenAPIHono()

export const typePythonNotebookHandler = app.openapi(
  getRepositorySearchTypePythonNotebookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
